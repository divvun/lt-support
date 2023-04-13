#!/usr/bin/env bash

# Simple shell script to replace yaml file refs with html-ified content of said ref
#
# Yaml refs are always on a line by itself, and is preceded with ! in the first position
# After the script is run, the yaml ref is replaced with html generated from the yaml file.

# Find all .md files:
for file in $(find docs -name '*.md'); do
    # for each .md file, check for yaml refs
    if grep -lq '^!.*\.yaml$' $file; then
        # echo "Fann deg! $file"
        # collect all yaml refs in a list, removing the initial !:
        yamls=$(grep '^!.*\.yaml$' $file | cut -c2- )
        # Loop over that list:
        for yamlfile in $yamls; do
            # echo Yamlfile: $yamlfile
            # Get the full pathname of the yaml file, relative to $file:
            yamlpathfile=$(echo $(dirname $file)/$yamlfile)
            # echo Yamlpathfile: $yamlpathfile
            # convert yaml to html, and store in temp file:
            deno run --allow-read ./generate-tables.ts $yamlpathfile > $yamlpathfile.html
            # Insert temp file directly after yaml ref:
            sed -i '' -e "/$yamlfile/r $yamlpathfile.html" "$file"
            # remove temp file:
            rm -f "$yamlpathfile.html"
        done
        # Remove all yaml refs:
        sed -i '' -e '/^!.*yaml$/d' $file
    fi
done;
