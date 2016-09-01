#!/usr/bin/env bash
CONTAINER_NAME=outgo-dev

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}

docker run -d -p 3000:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v `pwd`:/var/www/ library/node /var/www/entrypoint_dev.sh
docker logs -f outgo-dev