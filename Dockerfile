FROM node

RUN mkdir -p /home/service
WORKDIR /home/service

COPY . /home/service

EXPOSE 3000
CMD ["npm", "start"]