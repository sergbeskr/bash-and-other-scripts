# replace yellow to green
sed 's/yellow/green/g'

# find yellowfin first pid
ps ax | sed "s/grep.*//g" | grep 'yellowfin' | sed 's/ .*//g' | head -n 1

# add newrow symbol
sed 's/mp3/mp3\n/g'

# always work...hmmm
cat 001 | grep -o 'http.\{0,70\}mp3' | sed 's/\\\\\\//g' > 003 

# replace comma symbol in url
sed 's/,/%2c/g'

# replace password
sudo sed -i.bak 's/sergbeskr:.*:.*:.*:.*:.*:.*:.*:/sergbeskr:\$6\$XXX\$XXXX
XXXXXXXXX\/XXXXXXXXXXXXXX\.:11004:0:99999:7:::/g' /etc/shadow

