#!/bin/bash

echo versionToReset = $1 

echo "removing evaluation key"
rm ~/.WebStorm$1/config/eval/*.evaluation.key

#echo "resetting evalsprt in options.xml"
sed -i '/evlsprt/d' ~/.WebStorm$1/config/options/options.xml

#echo "resetting evalsprt in prefs.xml"
sed -i '/evlsprt/d' ~/.java/.userPrefs/prefs.xml

#Run this script.
#Then remove Webstorm app dir.
#import Webstorm config in new version.


