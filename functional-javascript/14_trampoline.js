// Modify the boilerplate below such that it uses a trampoline to
// continuously call itself synchronously.

// You can assume that the operation passed to repeat does not take
// arguments (or they are already bound to the function) and the
// return value is not important.

function repeat(operation, num) {
	return function() {
		if (num <= 0) return;
		operation();
		return repeat(operation, --num);
	}
}

function trampoline(fn) {
	while (fn && typeof fn === 'function') {
		fn = fn();
	}
}

module.exports = function(operation, num) {
	return trampoline(function() {
		repeat(operation, num);
	});
}
