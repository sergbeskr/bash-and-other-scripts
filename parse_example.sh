# replace yellow to green
sed 's/yellow/green/g'

# find yellowfin first pid
ps ax | sed "s/grep.*//g" | grep 'yellowfin' | sed 's/ .*//g' | head -n 1

# find all mp3 urls from something file
cat 001 | sed 's/mp3/mp3\n/g' > 002
cat 002 | grep -wo 'http.\{0,70\}mp3' | sed 's/\\\\\\//g' > 003
