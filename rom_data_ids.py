#!/usr/bin/python

import os, sys, logging, re, urllib2

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(":")

#######################################
# COMMAND FOR START:
# python rom_data_ids.py > test_rom.txt
#######################################

rom_data_ids = [[103565, 103566], [210042, 210043], [300001, 300002]]

more_info = True

def main():

    grabAllRomIds()
    #logger.info("Done!")

def grabAllRomIds():
    for n in rom_data_ids:
        for item_id in range(n[0], n[1] + 1):
            requestToDB(str(item_id))

def requestToDB(item_id):
    response_full = urllib2.urlopen("http://www.rom-welten.de/database/view.php?id=" + item_id)
    response = response_full.read()
    #logger.info("=====%s=====%s=====", response.code, response.read())
    
    item_name = re.search(r'<h1>(.*)</h1>', response).group(1)

    if item_name == "No information could be retrieved for this in the entire database.":
        logger.info("_____%s_____%s_____", item_id, item_name)
        return

#    some_attr = re.search(r'rom-tooltip.*\r\n<tbody>.*<td.*>(.*)</.*td></tbody>.*</table>', response).group(1)
#    some_attr = re.search(r'<t.*>(.*)</td>', response).group(1)
    if more_info == True:
        all_td_attrs = ""
        some_td_attrs = re.findall(r'<td.*>(.*)</td>', response)
        for td_attr in some_td_attrs:
            if td_attr != "":
                all_td_attrs = all_td_attrs + td_attr + "\n"
        
        logger.info("_____%s_____%s_____\n%s_____", item_id, item_name, all_td_attrs)
        #print("_____" + item_id + "_____" + item_name + "\n" + all_td_attrs)
    else:
        logger.info("%s %s", item_id, item_name)
        #print(item_id + " " + item_name)

main()
