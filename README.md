# Docker reactjs

## Build a image with Dockerfile

```js
docker build
docker build -f FILE_NAME_DOCKER
docker build -f FILE_NAME_DOCKER -t IMAGE_NAME .
// docker build -f Dockerfile.dev
```

## Build a cache latest

```js
docker build -t IMAGE_NAME .
```

## List image

```js
docker image ls
```

## Delete a image

```js
docker image rm IMAGE_ID
```

## Run container

```js
docker run -d IMAGE_NAME
```

```js
docker run -d --name CONTAINER_NAME IMAGE_NAME
```

## Check container running

```js
docker ps
```

## Remove container is running

```js
docker rm CONTAINER_NAME -f
```

## Run container with Docker networking, forwarding ports

```js
docker run -d -p PORT_APP_FORWARDING:PORT_APP --name CONTAINER_NAME IMAGE_NAME

// reactjs local port 3000 => forwarding port 4000 => 4000:3000

// env
docker run --env-file ./.env -d -p 8080:80 --name CONTAINER_NAME IMAGE_NAME
```

## Access machine, Bind mount to sync source code

```js
docker exec -it CONTAINER_NAME bash

// Khi content app thay đổi thì lại build lại content ở container or là vào thẳng container để sửa
// volumes, đồng bộ data khi thay đổi ở local

docker run -v dirLocalDirectory:containerDirectory -d -p PORT_APP_FORWARDING:PORT_APP --name CONTAINER_NAME IMAGE_NAME
```

# Docker compose

## Run docker compose

```js
// auto create a image
docker-compose up -d

// recreating
docker-compose up -d --build

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml down

docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down
```

## Stop docker compose

```js
docker-compose down
```

# Multi-stage build production with NGINX

```js
// env
docker run --env-file ./.env -d -p 8080:80 --name CONTAINER_NAME IMAGE_NAME
```

# Development and production workflow
