FROM node:alpine
RUN npm install -g json-server
WORKDIR /db
COPY ./ ./
CMD ["json-server","--host","0.0.0.0","--watch","db.json", "-p", "3001"]
