#!/usr/bin/env bash

# Your program should output only the first, third and fifth positional
# parameters, which will be passed into your script. Before each argument
# must be its sequence number with a colon :. Every parameter must be
# outputted on separate lines.

# For example, if you run the script like so:

# 	./parameters.bash one two three four five six seven

# The output must look like the following:

# 	1: one
# 	3: three
# 	5: five

# Do not pass any arguments to your solution; when you try to verify or run
# your script using learnyoubash, we will pass the arguments automatically.

echo "1: $1"
echo "3: $3"
echo "5: $5"
