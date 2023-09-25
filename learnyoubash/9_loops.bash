#!/usr/bin/env bash

# The first two positional parameters which will be passed into your script
# are the limits. You should write all even numbers in the range between the
# first and second positional parameters.

# Example:
# 	./loops.bash 10 17

# Output:
# 	10
# 	12
# 	14
# 	16

# Use for, while or until loops to solve this problem.

lower_bound=$1
upper_bound=$2

# APPROACH 1
# for (( i = $lower_bound; i < $upper_bound; i++ )); do
# 	[[ $(( $i % 2 )) -eq 0 ]] && echo $i
# done

# APPROACH 2
# i=$lower_bound
# while [[ $i -lt $upper_bound ]]; do
# 	[[ $(( $i % 2 )) -eq 0 ]] && echo $i
# 	i=$(( $i + 1 ))
# done

# APPROACH 3
# i=$lower_bound
# until [[ $i -ge $upper_bound ]]; do
# 	[[ $(( $i % 2 )) -eq 0 ]] && echo $i
# 	i=$(( $i + 1 ))
# done

# APPROACH 4
i=$(( $lower_bound % 2 == 0 ? $lower_bound : $lower_bound + 1 ))
while [[ $i -lt $upper_bound ]]; do
	echo $i; i=$(( $i + 2 ))
done
