FROM denoland/deno:alpine-2.2.7
LABEL authors="tapnisu"

WORKDIR /app
COPY . .
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
