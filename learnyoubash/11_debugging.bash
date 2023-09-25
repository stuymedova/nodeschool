#!/usr/bin/env bash

# You will receive positional parameters. These positional parameters are
# filenames in the format file[hash] (for example file177, file352). Your
# script should do the following things:

# 1. Enable verbose and noexec options using set
# 2. Output all received parameters using echo
# 3. Create all these files
# 4. Create a directory with name folder in current directory
# 5. Move all files to the folder
# 6. Change directory to the folder
# 7. List all files inside the folder
# 8. Disable verbose and noexec options using set

set -vn
echo $@
touch $@
mkdir ./folder
mv file* ./folder
cd ./folder
ls
set +vn
