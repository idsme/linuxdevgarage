#/bin/bash
#
echo "install Misc" 
sudo apt-get update
sudo apt-get install -y corkscrew
#
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v8.6.0
echo "Finished Misc Install"
#
