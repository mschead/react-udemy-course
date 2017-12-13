# Comando docker:
# docker run -it --rm -p 8080:8080 -v "$PWD":/usr/src/app react-udemy:1.0

FROM node:9.2.0
MAINTAINER "wssmarcos@gmail.com"

RUN npm install yarn -g \
	&& yarn global add live-server

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

CMD ["live-server", "public"]