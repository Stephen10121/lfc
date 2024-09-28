FROM node:alpine3.20 AS builder
WORKDIR /app

# Add necessary packages for Sharp to work
# RUN apk add --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-dev fftw-dev gcc g++ make libc6-compat

COPY package*.json .
# RUN ls
# ADD .svelte-kit /.svelte-kit
# ADD build /build
RUN npm ci
COPY . .
# RUN node --max_old_space_size=12000 && npm run build
# RUN npm run build
RUN npm prune --production

FROM node:alpine3.20
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/.svelte-kit .svelte-kit/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 7401

ENV NODE_ENV=production
ENV PORT=7401
ENV ORIGIN=http://localhost:7401

CMD [ "npm", "run", "production" ]