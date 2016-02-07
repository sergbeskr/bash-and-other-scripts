cat 001 | sed 's/mp3/mp3\n/g' > 002

#cat 002 | grep -wo 'http.*\{0,70\}mp3' > 003
cat 002 | grep -o  'http.\{0,70\}mp3' | sed 's/\\\\\\//g' > 003
