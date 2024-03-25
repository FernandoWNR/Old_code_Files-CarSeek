FROM node:alpine
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
RUN npm install -g sequelize-cli
COPY ./config ./config
COPY ./migrations ./migrations
COPY ./models ./models
COPY ./seeders ./seeders
COPY ./index.js ./index.js
COPY ./generateSecretKey.js ./
COPY ./controllers ./controllers
COPY ./routes ./routes
COPY ./helpers ./helpers
COPY ./middleware ./middleware
COPY ./shared ./shared
COPY ./.env ./
COPY ./carseek-412705-f4238195fb98.json ./
CMD ["npm", "start"]


