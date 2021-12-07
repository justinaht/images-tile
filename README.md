# EAB Code challenge

- [System overview](#system-overview)
- [Setup](#setup)

## System overview

This is a ReactJS using typescript template, sass to style components.

## Setup

First, you need an **.env** file to run the project locally. Copy **.env.example** to your own **.env.local** or **.env** file:
```
$ cp .env.example .env.local
```

Then, you can run the app in development mode w/o docker, either:
1. Build the app with dockerfile
```
# Start docker-compose first
$ docker-compose up -d --build

# Or build the app
$ docker build -t images-tile .
$ docker run --env-file .env.local -p 5000:5000 images-tile
```

2. Or, installing the dependencies in your local machine. Note that **.env.local** (or **.env**) is required.
```
$ npm install
$ npm run start
```
