#!/bin/bash

file=`sudo find / -name overthewall`
PID=`ps -ef | grep -v grep | grep "node /usr/local/bin/coffee ${file}/app.coffee" | awk '{print $2}'`
if [ ! $PID ];
then
	cd ../../
    /usr/local/bin/coffee ${file}/app.coffee >> /var/log/overthewallog/overwall.log &
	echo "overthewall is runing now"
	sleep 1
else
	echo "maybe you should kill overthewall process , pid : $PID"
fi
