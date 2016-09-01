#!/usr/bin/env bash

for i in {1..5}; do 
  git checkout v${i}
  npm run build
  ./node_modules/.bin/rimraf docs/v${i}
  ./node_modules/.bin/ncp build docs/v${i}
done
git checkout master
