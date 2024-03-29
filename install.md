# Installation Instructions

## Prerequisites
 * git ([git](https://git-scm.com/))
 * node.js ([node.js](https://nodejs.org/))

## Install the Application

 * Clone this project:
```
git clone https://github.com/inqbation/visualfda.git
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

## Docker Installation

* Install Docker following these instruccions:
```
https://docs.docker.com/installation/
```
* Clone this repository:
```
git clone https://github.com/inqbation/visualfda.git
cd visualfda
```
* Create the docker image:
```
docker build -t visualfda .
```
* Run docker:
```
docker run -d -p 3000:3000 visualfda
// The application should be running at http://localhost:3000
```

## Backend Installation
For backend installation please follow these instructions. [instructions](https://github.com/inqbation/fdadrugnames/blob/master/install.md)