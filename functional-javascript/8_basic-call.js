// Write a function duckCount that returns the number of arguments
// passed to it which have a property 'quack' defined directly on
// them. Do not match values inherited from prototypes.

// Example:

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

// APPROACH 1: ES6
function duckCount(...objs) {
	return objs.reduce((acc, obj) => {
		if (Object.hasOwnProperty.call(obj, 'quack')) {
			acc += 1;
		}
		return acc;
	}, 0);
}

// APPROACH 2: pre-ES6
// function duckCount() {
// 	return Object.values(arguments).reduce((acc, obj) => {
// 		if (Object.hasOwnProperty.call(obj, 'quack')) {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);
// }

module.exports = duckCount;
