FROM node:18-alpine3.16 AS base
ENV CI=true
ARG PNPM_VERSION=6.14.3
RUN npm --global install pnpm@${PNPM_VERSION}
WORKDIR /root/monorepo

FROM base AS dev
COPY ./pnpm-lock.yaml .
RUN pnpm fetch
COPY . .
RUN pnpm install --filter "server..." --frozen-lockfile --unsafe-perm
RUN pnpm build --filter "server^..."
RUN #pnpm test --if-present --filter "server"
RUN pnpm build --filter "server"

WORKDIR /root/monorepo/apps/server
EXPOSE 3002
ENV NODE_ENV=production
ENTRYPOINT ["pnpm", "start"]
