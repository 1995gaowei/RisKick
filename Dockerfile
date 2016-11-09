FROM node

RUN mkdir -p /home/service
WORKDIR /home/service

COPY . /home/service
RUN npm install

EXPOSE 22222
CMD ["npm", "start"]