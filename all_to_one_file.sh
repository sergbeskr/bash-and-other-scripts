echo > file_all_txt_notes.txt
for file in `find .`
do
#  echo $file `date`
  echo "___________________________________________________" >> file_all_txt_notes.txt
  echo "___________________________________________________" >> file_all_txt_notes.txt
  echo "___________________________________________________" >> file_all_txt_notes.txt
  echo "___________________________________________________" >> file_all_txt_notes.txt
  echo "___________________________________________________" >> file_all_txt_notes.txt
  cat $file >> file_all_txt_notes.txt
done