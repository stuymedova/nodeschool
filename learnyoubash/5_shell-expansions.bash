#!/usr/bin/env bash

# Create a file named expansions.bash.

# Your script should multiply the first positional parameter with the sum of
# the second and third parameter using arithmetic expansion. Save the result
# to the variable, $RESULT e.g.

# Then, using brace expansions, restore the following folder structure:

# 	project-<RESULT>
# 	├── dest
# 	│   ├── index.js
# 	│   └── util.js
# 	├── src
# 	│   ├── index.js
# 	│   └── util.js
# 	└── test
# 		├── index.js
# 		└── util.js

# Do not create any folders! Just output the result using echo. For example:

# 	./expansions.bash 1 5 6

# The result must looks like this:

# 	project-11/src/index.js project-11/src/util.js project-11/dest/index.js project-11/dest/util.js project-11/test/index.js project-11/test/util.js

result=$(( $1 * ($2 + $3) ))
echo project-$result/{src,dest,test}/{index,util}.js
