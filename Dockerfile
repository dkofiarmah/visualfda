FROM ubuntu:14.04

MAINTAINER Cesar Pino <cesar.pino@inqbation.com>

# Installing NVM and node
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        build-essential \
        curl \
        git \
        python \
        man \
        ca-certificates \
        libssl-dev

RUN useradd -d /app -m app
USER app
ENV HOME /app
ENV NODE_VER v0.12.5

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash \
    && source $HOME/.nvm/nvm.sh \
    && echo '. ~/.nvm/nvm.sh' >> $HOME/.profile \
    && nvm install $NODE_VER \
    && nvm alias default $NODE_VER \
    && nvm use default

# Adding npm and node to PATH
ENV PATH $PATH:/app/.nvm/versions/node/$NODE_VER/bin

RUN npm install bower gulp -g

# Adding source files
ADD . /app/

# Define working directory.
WORKDIR /app

RUN npm install && bower install

# Expose gulp ports
EXPOSE 3000 3001 9876