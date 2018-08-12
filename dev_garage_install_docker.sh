#/bin/bash
echo "install Docker" 
#sudo apt-get update
#sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository    "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable"
sudo apt-get update
sudo apt-get -y install docker-ce
# install Docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` > ./docker-compose
sudo mv ./docker-compose /usr/local/bin/docker-compose
chmod 755 /usr/local/bin/docker-compose 
# start Docker
sudo systemctl start docker
sudo systemctl enable docker
# enable docker for user
sudo usermod -aG docker $USER
echo "Finished Docker Install"

