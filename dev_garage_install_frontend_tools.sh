#/bin/bash
echo "Install frontend tools" 
#install nvm
#install some global packages.
npm install prettier --save-dev
#make sure you have installed webstorm 2018.1 or higher.
#also install https://plugins.jetbrains.com/plugin/10456-prettier
#>Settings>Language & Frameworks > Javascript > ECMAScript .1
#also install https://plugins.jetbrains.com/plugin/7294-editorconfig
#ForceShortcuts plugin

#Check>Language & Frameworks > Node.js and NPM 
#Check>Node interpreter> points to correct node version
#Check>Package manager> yarn points to correct yarn version

#Configure this so you don't have to press Alt + Ctrl + Shift + P
#https://prettier.io/docs/en/webstorm.html > Running Prettier on save using File Watcher

#static type checker that brings type annotations to JavaScript
#https://www.jetbrains.com/help/idea/using-the-flow-type-checker.html
#npm install --global flow-bin


npm install -g eslint
#installes make or will fail during eslint --init
sudo apt-get install build-essential
eslint --init

npm install --save-dev eslint-config-prettier

https://github.com/airbnb/javascript

#TODO set quotes to be generated in webstorm conform linting settings.
#TODO webstorm want to go single quotes but prettier has formatted double quotes.
#TODO check if AirBnB works.

https://www.themarketingtechnologist.co/eslint-with-airbnb-javascript-style-guide-in-webstorm/

echo "Finished frontend toolsl"

