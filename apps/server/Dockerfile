FROM node:alpine as builder
ENV CI=true
ARG PNPM_VERSION=6.14.3
RUN npm --global install pnpm@${PNPM_VERSION}
WORKDIR /app


FROM node:alpine as installer
WORKDIR /app
COPY ./pnpm-lock.yaml .
RUN pnpm fetch
COPY . .
RUN pnpm install --filter "server..." --frozen-lockfile --unsafe-perm
RUN #pnpm build --filter "server^..."
RUN pnpm build --filter "server"

FROM node:alpine AS runner
WORKDIR /app
RUN #pnpm test --if-present --filter "server"

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app
COPY --from=installer /app .
EXPOSE 3002
ENV NODE_ENV=production

CMD ["node", "apps/server/dist/index.js"]

#ENTRYPOINT ["pnpm", "build:start"]
#ENTRYPOINT ["pnpm", "start"]
