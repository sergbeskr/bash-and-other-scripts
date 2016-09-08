for file in `find -name changelog.xml`
do
  if [ -s $file ]; then
    echo $file >> 111.txt
  fi
done
