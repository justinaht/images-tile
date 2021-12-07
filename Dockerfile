FROM node:14.18.1-alpine as build-stage
COPY . .
CMD ["ls", "-la"]
# CMD ["nginx", "-g", "daemon off;"]