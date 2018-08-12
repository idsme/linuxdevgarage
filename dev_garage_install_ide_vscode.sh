#/bin/bash
echo "install VsCode" 
sudo apt-get update
# install vscode
sudo apt-get -y install gconf-service gconf-service-backend gconf2-common libgconf-2-4
curl -o vscode.deb -L http://go.microsoft.com/fwlink/?LinkID=760868
sudo dpkg -i vscode.deb 
sudo apt-get install -f
sudo apt-get -y install code
rm vscode.deb
echo "Finished VsCode Install"

