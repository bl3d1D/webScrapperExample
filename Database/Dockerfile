FROM mysql:5.7.17

MAINTAINER ...

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=notificationDB   

COPY DB.sql /docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]

