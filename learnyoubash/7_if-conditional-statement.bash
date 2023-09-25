#!/usr/bin/env bash

# Using if statements and primaries, output Good morning! if the first
# positional parameter is less than 12. Output Good afternoon! if it is
# equal to/greater than 12 but less than 18. Otherwise, output Good evening!
# if it is equal to/greater than 18. Take care about cases when the
# positional argument is less than 0 and greater than 24 (print Error! in
# these cases).

# For example:

# 	./if.bash -5
# 	./if.bash 12
# 	./if.bash 21

# Output:

# 	Error!
# 	Good afternoon!
# 	Good evening!

if [[ $1 -ge 0 && $1 -lt 12 ]]; then
	echo 'Good morning!'
elif [[ $1 -ge 12 && $1 -lt 18 ]]; then
	echo 'Good afternoon!'
elif [[ $1 -ge 18 && $1 -le 24 ]]; then
	echo 'Good afternoon!'
else
	echo 'Error!'
fi
