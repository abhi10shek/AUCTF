line_number=`cut -f4 < dump | grep -n 1| cut -d ":" -f1`
#$line_number = $line_number+1
cat dump| grep -A 10 -B 10 $line_number
