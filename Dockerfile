FROM denoland/deno:alpine-1.44.4
LABEL authors="tapnisu"

WORKDIR /app
COPY . .
RUN deno task build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
