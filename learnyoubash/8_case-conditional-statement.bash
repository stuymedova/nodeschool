#!/usr/bin/env bash

# In this exercise you will create a small image extensions checker. Using a
# case statement, check if the first positional parameter is a jpeg (or
# jpg), png, or gif extension. Output It is jpeg., It is png., or It is gif.
# accordingly. Take care about cases when the positional argument contains
# any other extension (print [EXT] is not an image! in these cases).

# For example:

# 	./case.bash png
# 	./case.bash js
# 	./case.bash jpg

# Output:

# 	It is png.
# 	js is not an image!
# 	It is jpeg.

case $1 in
	(jpeg|jpg)
		echo "It is jpeg."
		;;
	(png|gif)
		echo "It is $1."
		;;
	(*)
		echo "$1 is not an image!"
	;;
esac
