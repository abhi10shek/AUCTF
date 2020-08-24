#!/bin/bash

while true:
do
	timeout 2 bash ./sc1.sh
	if [ -s out ]
	then
		cat out
	else
		echo "ledu maya"
	fi
done
