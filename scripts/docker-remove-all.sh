#!/usr/bin/env bash

# To delete all containers including its volumes use
docker rm -vf $(docker ps -a -q)

# To delete all the images,
docker rmi -f $(docker images -a -q)
