#!/bin/bash

function restart(){
        echo 'restarting'
        sudo service squid3 stop
        date
        statu='false'
        lists=$(nmcli con list | grep vpn | awk '{print $1}')
        for((i=1;i<5;i++))
        do
                echo 'restart time '$i
                for vpn in $lists
                do
                        nmcli con up id $vpn
                        ret=$?
                        if [ $ret -eq 0 ]
                        then
                                echo "success "$vpn
                                statu='true'
                                break
                        fi
                        echo "fail "$vpn
                done
                if [ $statu = 'true' ]
                then
                        break
                fi
        done

}
result=`curl https://drive.google.com -m 10`
if [[ $result =~ "Redirecting" ]]
then
        date
        sudo service squid3 start
        echo 'success'
        exit 0
fi
restart
