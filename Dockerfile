# build stage
FROM node:lts-alpine as build-stage
ARG VITE_API_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN VITE_API_URL=$VITE_API_URL npm run build


# production stage
FROM nginx:stable-alpine as production-stage
RUN apk add --no-cache bash gettext
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/templates
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/bin/bash", "-c", "envsubst < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

