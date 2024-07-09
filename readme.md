
This package contains a number of examples of explicit resource management with the driver.

mongodb-6.8.0.tgz contains a POC implementation of explicit resource management in the driver and is
used throughout this repo.

## installing dependencies

1. make sure you have `npx` installed
2. `npx lerna exec npm i`

## running each example

#### all together

`npx lerna exec npm run run --stream --concurrency 1`

#### one at a time

`npx lerna exec npm run run --scope @test/<package>`

## breakdown of packages

`latest-node-types` contains an example using tslib helpers, explicit resource management, latest Typescript and latest node types

`oldest-node-types` uses latest TS, tslib, explicit resource management with an old version of node types

`no-resource-management-enabled` uses TS 4.5, no tslib, no explicit resource management and the updated driver to demonstrate
that the driver's changes don't break compatibility