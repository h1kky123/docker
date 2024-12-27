FROM postgres:15-alpine
ENV POSTGRES_USER=adminENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=postgres
COPY init.sql /docker-entrypoint-initdb.d/
