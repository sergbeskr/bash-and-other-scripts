#!/usr/bin/python
# -*- coding: cp866 -*-

import os, sys, logging, re, json, unicodedata, locale, codecs

#sys.setdefaultencoding(locale.getpreferredencoding())

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(":")

musicDir = "D:\\sergbeskr\\music\\11111"
destinationDir = "D:\\sergbeskr\\music\\22222"

def main():

    reload(sys)
    sys.setdefaultencoding('utf-8')
    sys.stdout = codecs.getwriter('cp866')(sys.stdout,'replace')

    #print sys.getdefaultencoding()
    #print locale.getpreferredencoding()
    #print sys.stdout.encoding

    #aaa = "Дратути 123 Qwerty"
    #bbb = aaa.encode('cp866', 'replace')
    #logger.info("%s", aaa.encode('cp866', 'replace'))
    #logger.info("%s", aaa)
    #logger.info("%s", bbb)
    #print aaa

    allMusicFiles = os.listdir(musicDir)
    musicFolderNames = {}
    logger.info("%s", allMusicFiles)
    
    for file_name in allMusicFiles:
        group_name = re.search(r'(.*) -', file_name).group(1)
        songs_sum = 0
        if group_name in musicFolderNames:
            songs_sum = musicFolderNames[group_name] + 1
        else:
            songs_sum = 1
        musicFolderNames[group_name] = songs_sum

    #logger.info("\n %s", musicFolderNames)

    logger.info("Starting create dirs...")

    for group_name in musicFolderNames:
        if musicFolderNames[group_name] > 1:
            music_group_dir = destinationDir + "\\" + group_name
            if not os.path.exists(music_group_dir):
                #logger.info("... %s", music_group_dir)
                #logger.info("... %s", type(music_group_dir))
                #aaa = music_group_dir.encode('ascii', 'replace')
                #logger.info("... %s", type(music_group_dir))
                #logger.info("... %s", type(aaa))
                #logger.info("... %s", aaa)
                #logger.info("... %s", type(music_group_dir.encode('ascii', 'replace')))
                os.makedirs(music_group_dir)
    
    logger.info("Starting moving music files...")

    for file_name in allMusicFiles:
        group_name = re.search(r'(.*) -', file_name).group(1)
        if musicFolderNames[group_name] > 1:
            src = musicDir + "\\" + file_name
            dist = destinationDir + "\\" + group_name + "\\" + file_name
            #logger.info("___%s___%s___", src, dist)
            os.rename(src, dist)
            logger.info("Moved file to folder: %s", group_name)
        else:
            logger.info("Ignore file: %s", file_name)

    logger.info("Done!")

main()

