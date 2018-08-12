#!/bin/sh
"/home/idsme/dev_apps/WebStorm-182.3684.70/jre64/bin/java" -cp "/home/idsme/dev_apps/WebStorm-182.3684.70/plugins/git4idea/lib/git4idea-rt.jar:/home/idsme/dev_apps/WebStorm-182.3684.70/lib/xmlrpc-2.0.1.jar:/home/idsme/dev_apps/WebStorm-182.3684.70/lib/commons-codec-1.10.jar:/home/idsme/dev_apps/WebStorm-182.3684.70/lib/util.jar" org.jetbrains.git4idea.http.GitAskPassApp "$@"
