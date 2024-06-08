FROM denoland/deno:alpine

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
