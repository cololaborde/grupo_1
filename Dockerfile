FROM node:16.14
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
 
COPY . ./
 
EXPOSE 3000
 
CMD [ "npm", "start" ]