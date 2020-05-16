#!/usr/bin/env bash
ng build --prod --base-href="https://maythe4.github.io/dice/"
cp -v dist/dice/index.html dist/dice/404.html
git add --all
git commit -m "$1"
git push -u origin master

# github pages
cd ../maythe4.github.io/
rm -rvf dice
cp -rv ../dice/dist/dice .
git add --all
git commit -m "$1"
git push -u origin master