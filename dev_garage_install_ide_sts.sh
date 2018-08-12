#/bin/bash
echo "install Sts" 

#
# get spring toolbox
#
mkdir ~/STS
cd ~/STS
curl -o springtools.tgz http://download.springsource.com/release/STS/3.9.1.RELEASE/dist/e4.7/spring-tool-suite-3.9.1.RELEASE-e4.7.1a-linux-gtk-x86_64.tar.gz
tar xfo springtools.tgz
rm springtools.tgz
sudo ln -s ~/STS/sts-bundle/sts*/STS /usr/local/bin
#
#
echo "Finished Sts Install"

