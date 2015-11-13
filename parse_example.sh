# replace yellow to green
sed 's/yellow/green/g'

# find yellowfin first pid
ps ax | sed "s/grep.*//g" | grep 'yellowfin' | sed 's/ .*//g' | head -n 1