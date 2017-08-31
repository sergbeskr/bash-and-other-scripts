import os, sys, logging, re, json

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(":")

def main():

    test_1 = {} # type dict
    test_2 = [] # type list
    test_3 = "test plist_path ololo" # type str
    logger.info("test_1___%s___%s___", test_1, type(test_1))
    logger.info("test_2___%s___%s___", test_2, type(test_2))
    logger.info("test_3___%s___%s___", test_3, type(test_3))
    if type(test_3) is str:
        logger.info("str")
    if ((type(test_3) is str) or (type(test_3) is unicode)) and "plist_path" in test_3:
        logger.info("working!")

main()
