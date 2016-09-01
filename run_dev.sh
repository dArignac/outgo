#!/usr/bin/env bash
CONTAINER_NAME=outgo-dev
#WEBSITE_ASSETS=/path/to/source/frontend-codebase/assets

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}

#docker run -d -p 80:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v ${WEBSITE_ASSETS}:/static/ -v `pwd`:/app library/node:5.0 /app/scripts/dev_entrypoint.sh
docker run -d -p 3000:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v `pwd`:/app library/node /app/entrypoint_dev.sh