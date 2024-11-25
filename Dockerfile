FROM denoland/deno:alpine-2.1.1
LABEL authors="tapnisu"

WORKDIR /app
COPY . .
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
