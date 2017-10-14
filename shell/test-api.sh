#!/usr/bin/env bash

# run api tests using mocha
cd ../
mocha -r ts-node/register test/api/**/.*ts