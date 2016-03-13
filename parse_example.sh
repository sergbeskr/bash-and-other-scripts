# replace yellow to green
sed 's/yellow/green/g'

# find yellowfin first pid
ps ax | sed "s/grep.*//g" | grep 'yellowfin' | sed 's/ .*//g' | head -n 1

# add newrow symbol
sed 's/mp3/mp3\n/g'

# always work...hmmm
cat 001 | grep -o 'http.\{0,70\}mp3' | sed 's/\\\\\\//g' > 003 

# replace some symbols in url
sed 's/,/%2c/g'
