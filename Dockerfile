

FROM node:latest as react-build

COPY ./react ./react

WORKDIR /react

RUN npm install

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=react-build /react/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


FROM adoptopenjdk/openjdk8

COPY target/Start-0.0.1-SNAPSHOT.jar Start-0.0.1-SNAPSHOT.jar

CMD ["java", "-jar",  "/Start-0.0.1-SNAPSHOT.jar"]

EXPOSE 8090


