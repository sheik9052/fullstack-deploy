FROM node:18
WORKDIR /app
COPY . .
RUN npm install express pg
EXPOSE 3000
CMD ["node", "server.js"]
