#!/bin/bash

# npm modules
npm install

# global node typings
typings install dt~node --global
typings install dt~es6-shim --global

# project internal typings
typings install

# project logs directory
mkdir logs

# auto-create basic configuration environments file
cp ./config/node/basic-env ./.env

# git hooks
cp ./config/git/pre-commit .git/hooks/pre-commit