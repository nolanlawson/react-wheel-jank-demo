#!/usr/bin/env bash

for i in {1..3}; do 
  git checkout v${i}
  npm run build
  ./node_modules/.bin/rimraf docs/${i}
  ./node_modules/.bin/ncp build docs/${i}
done
git checkout master
