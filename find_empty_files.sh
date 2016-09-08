for file in `find -name changelog.xml`
do
  if [ -s $file ]; then
    echo $file not empty
  else
    echo $file >> 111.txt
  fi
done
