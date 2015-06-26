VisualFDA
=========

[![Build Status](https://travis-ci.org/inqbation/visualfda.svg?branch=master)](https://travis-ci.org/inqbation/visualfda)

VisualFDA Creates charts from openFDA API easily.

Demo Site
---------
https://visualfda.herokuapp.com

Team
----
- Project Leader: {name of leader}
- Agile project manager
- Technical architect
- Front end web developer
- Back end web developer
- Front end web designer

Technologies used on architectural layer
----------------------------------------
- NodeJS
- AngularJS
- CSS3
- HTML5
- Javascript

Other Technologies used for development.
----------------------------------------
- npm
- bower
- Yeoman
- gulp
- bower
- Jasmine for Unit testing
- Karma to run the unit testing.

PaaS Used
---------
- This project is been deployed to Heroku.

System Used for Continuos Integration
-------------------------------------
- We are using Travis for Continuos Integration and Continuos Deployment.

Installation
------------
```
npm install && bower install
```
For development run:
```
gulp serve
```
To create a distribution version run the next command. It will create a folder 'dist' inside your instance, with all files optimized for deployment:
```
gulp build
```
Installation development instance with Docker
---------------------------------------------
Install docker following these instructions:
- OSX: Download and install the current version. https://github.com/boot2docker/osx-installer/releases/tag/v1.7.0, Download Boot2Docker by clicking Boot2Docker-x.x.x.pkg in the “Downloads” section.
- Windows: Follow this instructions https://docs.docker.com/installation/windows/.
- Ubuntu: Follow this instructions https://docs.docker.com/installation/ubuntulinux/.
- There is a set of instructions on how to install Docker in each operative system here: https://docs.docker.com/

Run the development server, and then open http://localhost:3000
```
docker run -p 3000:3000 -t -i inqbation/node gulp serve
```

- set up or used configuration management
- set up or used continuous monitoring
- deploy their software in a container (i.e., utilized operating-system-level virtualization)
- used an interactive approach, where feedback informed subsequent work or versions of the prototype
- provided sufficient documentation to install and run their prototype on another machine
- prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge
