FROM node:20 AS build
WORKDIR /app
COPY *.json ./
RUN npm install
COPY . .
RUN npx nest build shared
RUN npx nest build ms-a

FROM node:alpine AS production
WORKDIR /app
COPY --from=build /app/dist/apps/ms-a ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist/libs/shared ./dist/libs/shared

EXPOSE 3000
CMD ["node", "dist/main.js"]