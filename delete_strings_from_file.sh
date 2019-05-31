#!/bin/bash

for file in `find .`
do
  if [ -f $file ]
  then
    echo "___${file}"
    cat $file | grep -v "\"version\":" | grep -v "\"creationDate\":" | grep -v "\"parentVersion\":" >> "${file}_"
    rm $file
  fi
done
