FROM node

RUN mkdir -p /home/service
WORKDIR /home/service

COPY . /home/service

EXPOSE 22222
CMD ["npm", "start"]