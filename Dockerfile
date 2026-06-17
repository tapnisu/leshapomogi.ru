FROM node:24-alpine3.24 AS base
LABEL authors="tapnisu"

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN npm install --global corepack@latest && corepack enable && corepack prepare --activate

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . /app
RUN pnpm run build

FROM base
COPY . /app/
COPY --from=build /app/build /app/build
COPY --from=prod-deps /app/node_modules /app/node_modules

EXPOSE 3000

CMD [ "pnpm", "run", "start" ]
