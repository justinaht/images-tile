FROM node:14.18.1-alpine as build-stage
COPY . .
RUN yarn
RUN yarn build --production

FROM nginx:alpine
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage ./build /usr/share/nginx/html
ARG URI
ENV REACT_APP_URI=api:5000
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]