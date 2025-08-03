FROM node:22-alpine3.22
RUN yarn global add serve
WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

COPY . .
RUN yarn build
EXPOSE 5173:5173

CMD ["serve", "-s", "-l", "5173", "dist"]

# BUILD -> docker build -t blogg-frontend .   
# RUN -> docker run --name blogg-frontend -p 5173:5173