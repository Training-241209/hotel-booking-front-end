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
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["npm", "start"]
# CMD ["nginx", "-g", "daemon off;"]


