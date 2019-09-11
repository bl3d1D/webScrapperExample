

FROM node:latest as react-build

COPY . .

WORKDIR /

RUN npm install

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=react-build /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

