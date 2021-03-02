#!/bin/bash

DATE=$(date "+%Y-%m-%d")

docker run -it --rm mariadb mysqldump \
  -h8.135.66.238 \
  -uroot \
  -pAbcd1234 exam > exam-${DATE}.sql
