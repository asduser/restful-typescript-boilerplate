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