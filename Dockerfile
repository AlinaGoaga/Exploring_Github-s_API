FROM node:13.7.0-alpine AS react-build
WORKDIR /app
COPY . ./
RUN npm install --frozen-lockfile
RUN npm run build

FROM nginx:1.17-alpine AS server
COPY --from=react-build /app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 11001
