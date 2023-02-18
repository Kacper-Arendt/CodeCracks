# BUILDER - Stage 1
FROM node:alpine as builder
WORKDIR /app
RUN apk update && yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker
ENV PATH="${PATH}:/usr/local/turbo/bin"
# INSTALLER - Stage 2
FROM node:alpine as installer
WORKDIR /app
RUN apk update && apk add g++ make py3-pip && yarn global add pnpm

# Add turborepo binary to the image
COPY --from=builder /usr/local/bin/turborepo /usr/local/bin/turborepo

# First install dependencies (as they change less often)
COPY --from=builder /app/out/full/.gitignore ./.gitignore
COPY --from=builder /app/out/full/turbo.json ./turbo.json
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm fetch

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
RUN pnpm install -r --offline --ignore-scripts
RUN pnpm turbo run build --filter=api

# RUNNER - Stage 3
FROM node:alpine AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app
COPY --from=installer /app .

CMD ["node", "apps/api/dist/main.js"]
