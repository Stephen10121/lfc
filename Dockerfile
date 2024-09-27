FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .

RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 7401

ENV NODE_ENV=production
ENV PORT=7401
ENV ORIGIN=http://localhost:7401

CMD [ "npm", "run", "production" ]