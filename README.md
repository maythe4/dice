mkdir maythe4
cd maythe4
git clone https://github.com/maythe4/dice.git
cd dice
npm install
ng serve --open
ng build --prod --base-href="https://maythe4.github.io/dice/"
cp dist/dice/index.html dist/dice/404.html
git add --all
git commit -m "message"
git push -u origin master
