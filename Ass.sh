#!/bin/bash

	action=$(yad --center --width 350 --height 130 \
		--title "Screen Desktop"\
		--form\
		--button="<span color='#202020'><big>Server Screen</big></span>:2"\
		--button="<span color='#202020'><big>Client</big></span>:3"\
		--button="<span color='#202020'><big>EXIT</big></span>:1"\
	)

	ret=$?

	[[ $ret -eq 1 ]] && exit 0

	ip=`ifconfig | grep 'inet addr' |grep Bcast| awk '{print $2}' | sed 's/addr://g'`

	if [[ $ret -eq 2 ]]; then

		sudo ufw allow 9500


		pri=$(yad  --width 300 --height 150 --center --title="IP of Server Screen" \
			--text="<big>IP : </big><big>$ip</big>"\
			--form\
			--button="<b>Let's Go </b>"\
			--button="<b>Exit</b>:1" )
		ret=$?
		[[ $ret -eq 1 ]] && exit 0
		nohup x11vnc -q -nodpms --progressive height -nodragging -noxkb -cursor -viewonly -shared  -auth guess
	fi
	if [[ $ret -eq 3 ]]; then

		sel=$(yad  --width 300 --height 150 --center --title="Push IP of Server Screen" \
			--form\
			--field="<big><b><span color='#101010'>Enter IP of Server Screen</span></b></big>"\
			--button="<b>End Screen</b>:5"\
			--button="<b>OK</b>:4" \
			--button="<b>Cancel</b>:1" )
		ret=$?
		[[ $ret -eq 1 ]] && exit 0
		IFS="," read -r -a array <<<"$sel"
		$num11=${array[0]}

		if [[ $ret -eq 4 ]]; then
		sudo ufw allow 9500
		vncviewer -fullscreen -viewonly -x11cursor -quality  9 %num11 :0

		fi
		if [[ $ret -eq 5 ]]; then
			sudo ufw deny 9500
		fi

	fi
