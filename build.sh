#!/bin/bash

set -x

# sed -i 's%@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);%@import url(/static/googleapis/fonts.googleapis.com.css.css);%' ./threadx/build/static/css/main.*.css

yarn build

find . -type f -name "*.map" -delete

cp -a ./build/index.html ./build/404.html

sed -i 's%@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);%@import url(/static/googleapis/fonts.googleapis.com.css.css);%' ./build/static/css/*.chunk.css

echo "......awesomely done......"
