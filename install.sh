#!/bin/bash

# npm modules
npm install

# project logs directory
mkdir logs

# auto-create basic configuration environments file
cp ./config/node/basic-env ./.env

# git hooks
cp ./config/git/pre-commit .git/hooks/pre-commit