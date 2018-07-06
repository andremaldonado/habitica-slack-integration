FROM node:10
WORKDIR /usr/src
COPY package.json ./
RUN npm install
COPY . .    
CMD npm start
EXPOSE 3394 
