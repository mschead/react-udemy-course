# Comando docker:
# docker run -it --rm -p 8080:8080 -v "$PWD":/usr/src/app react-udemy:1.0

# Com a imagem pronta, subir o container uma vez para cada comando:
# yarn init
# yarn add babel-preset-react@6.24.1
# yarn add babel-preset-env@1.5.2

FROM node:9.2.0
MAINTAINER "wssmarcos@gmail.com"

RUN npm install yarn -g \
	&& yarn global add live-server \
	&& yarn global add babel-cli@6.24.1 

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

CMD ["live-server", "public"]