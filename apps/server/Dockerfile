#FROM node:16-alpine AS base
#ENV CI=true
#ARG PNPM_VERSION=6.14.3
#RUN npm --global install pnpm@${PNPM_VERSION}
#WORKDIR /root/monorepo
#
#FROM base AS dev
#COPY ./pnpm-lock.yaml .
#RUN pnpm fetch
#COPY . .
#RUN pnpm install --filter "server..." --frozen-lockfile --unsafe-perm
#RUN pnpm build --filter "server^..."
#RUN #pnpm test --if-present --filter "server"
#RUN pnpm build --filter "server"
#
#WORKDIR /root/monorepo/apps/server
#EXPOSE 3002
#ENV NODE_ENV=production
##ENTRYPOINT ["pnpm", "build:start"]
#ENTRYPOINT ["pnpm", "build"]

# BUILDER - Stage 1
FROM node:alpine as builder
WORKDIR /app
RUN apk update && yarn global add turbo
COPY . .
RUN turbo prune --scope=server --docker

# INSTALLER - Stage 2
FROM node:alpine as installer
WORKDIR /app
RUN apk update && apk add g++ make py3-pip && yarn global add pnpm

# First install dependencies (as they change less often)
COPY --from=builder /app/out/full/.gitignore ./.gitignore
COPY --from=builder /app/out/full/turbo.json ./turbo.json
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm fetch

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
RUN pnpm install -r --offline --ignore-scripts
RUN pnpm turbo run build --filter=server

# # RUNNER - Stage 3
FROM node:alpine AS runner
WORKDIR /app

# # Don't run production as root
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app
COPY --from=installer /app .

CMD ["node", "apps/server/dist/index.js"]