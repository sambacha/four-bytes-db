#!/bin/bash

# check for existing archive, if found exit with status code
FILE=signatures_4bytes.zip
if [ -f "$FILE" ]; then
    echo "$FILE already exists." && exit 1
else 
    echo "$FILE does not exist."
fi

# count to make sure we actually have entires in the directory 
echo "Calculating Events and Signature Archive Size"
event=$(ls event-sig/ | wc -l)
signatures=$(ls signatures/ | wc -l)

echo -ne "A total of $event and $signatures entries have been collected"
echo "\n"
sleep 1

# generate the zip archive 
zip -r signatures_4bytes.zip signatures/* -x ".*" -x "__MACOSX"
zip -r event_signatures_4bytes.zip event-sig/* -x ".*" -x "__MACOSX"
echo "Archive's successfully generated"
exit 0
#EOF
