#!/usr/bin/env bash

# A few values will be passed into your script through positional
# parameters. As you already know, all parameters which were passed into the
# script are stored in $* and $@ variables. These variables are none other
# than arrays.

# You should take slice of elements consisting of the second to third items
# (eventually two items). Save these elements into a new array. Add to the
# beginning of the array two new items, I and am. Add to the end of the
# array two items: and and the fourth positional argument.

sentence=(I am ${@:2:2} and ${@:4:1})
echo "${sentence[*]}"
