# build stage
FROM node:lts-alpine as build-stage
ARG API_URL
ENV API_URL=$VITE_API_URL
WORKDIR /app
COPY package*.json ./
RUN VITE_API_URL=API_URL npm install
COPY . .
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

