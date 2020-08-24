#!/bin/bash

nc -lp 80 && for ((i=1024;i<=65500;i++));do nc localhost $i ; done;
