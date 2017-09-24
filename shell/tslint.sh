#!/usr/bin/env bash

# run tslint to check typescript files via CLI
cd ../
tslint --type-check --project tsconfig.json "./src/**/*.ts"