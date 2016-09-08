for file in `find -name changelog.xml`
do
  if [ -s $file ]; then
    echo "lol" > /dev/null
  else
    echo $file
    echo $file >> 111.txt
  fi
done
