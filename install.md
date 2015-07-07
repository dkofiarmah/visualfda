Installation Instructions
=========================

 * Install NodeJS
 * Clone this project:
```
git clone git@github.com:inqbation/visualfda.git
cd visualfda
```
 * Install all dependencies:
```
npm install bower gulp -g
npm install
bower install
```
 * For development enviroment run:
```
gulp serve
```
 * For testing run:
```
gulp test
```
 * Generate a deployment version running:
```
gulp build
```

Docker Installation
===================
* Install Docker following these instruccions:
```
https://docs.docker.com/installation/
```
* Clone this repository:
```
git clone git@github.com:inqbation/visualfda.git
cd visualfda
```
* Create the docker image:
```
docker build -t visualfda .
```