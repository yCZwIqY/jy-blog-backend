FROM node:16
# sharp 호환성을 위한 libvips-dev 설치
RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y libvips libvips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
COPY ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm config set network-timeout 600000
RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
