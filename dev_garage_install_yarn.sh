curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list



sudo apt remove cmdtest
sudo apt-get purge cmdtest


#On Ubuntu 16.04 or below and Debian Stable, you will also need to configure the NodeSource #repository to get a new enough version of Node.js.

#Then you can simply:

#sudo apt-get update && sudo apt-get install yarn
#Note: Ubuntu 17.04 comes with cmdtest installed by default. If you’re getting errors from #installing yarn, you may want to run sudo apt remove cmdtest first. Refer to this for more #information.

#If using nvm you can avoid the node installation by doing:

# Below command does not work if you have linuxbrew then use the brew install command
#sudo apt-get install --no-install-recommends yarn

brew install yarn

yarn --versionors were encountered while processi
