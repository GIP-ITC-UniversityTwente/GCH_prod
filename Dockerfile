FROM node:16.16
MAINTAINER Stanislav Ronzhin "s.ronzhin@utwente.nl"

# Update aptitude with new repo
RUN apt-get update
# Install software
RUN apt-get install -y git

RUN mkdir /gch
WORKDIR /gch

RUN npm install webpack -g

ADD package.json /gch/
RUN npm install

ADD . /gch

#specify the port used by GCH app
EXPOSE 4000

ENTRYPOINT ["npm", "run", "build"]
