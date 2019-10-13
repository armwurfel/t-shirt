#!/bin/bash
echo '###########  Starting building T-Shirt Project ###########'
echo 'Installing dependencies..'
yarn; 
echo 'Building Project'
yarn build;
mkdir -p docs;
cp build/* docs/ -r
echo 'Docs directory populated properly'
