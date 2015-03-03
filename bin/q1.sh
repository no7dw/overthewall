#!/bin/bash

function restart(){
	echo 'restarting'
	date
	for((i=1;i<5;i++))
	do
		echo 'restart time '$i
	#	sudo service squid3 restart
		sudo /usr/bin/nmcli con up id vpn2
		ret=$?
		if [ $ret -eq 0 ]
		then
			echo 'Success.'
			break
		fi
	done

}
curl https://drive.google.com -o /var/log/q.log  -m 5
if [ -e /var/log/q.log ]
then
	rm "/var/log/q.log"	
	date
	echo 'success'
	exit 0
fi
restart	
