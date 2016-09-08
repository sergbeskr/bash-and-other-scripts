find -name changelog.xml
for file in `find -name changelog.xml`
do
  if `cat $file` == "" then
    echo $file >> 111.txt
  fi
done
