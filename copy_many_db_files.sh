folder=`date +%d%m20%y_%H%M`
mkdir -p $folder/2015

for file in `ls /var/data/2015 -1 --sort=time`
do
cp -r /var/data/2015/$file /var/backups/$folder/2015/$file
echo $file
done
