#!/usr/bin/env bash

npm run cleanup
npm i
npm run format
npm run lint
npm run typecheck
npm run build
