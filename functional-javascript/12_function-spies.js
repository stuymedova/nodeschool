// Override a specified method of an object with new functionality while
// still maintaining all of the old behaviour.

// Create a spy that keeps track of how many times a function is called.

function Spy(target, method) {
	const originalFn = target[method];
	const result = { count: 0 };
	target[method] = function(...args) {
		result.count += 1;
		return originalFn.apply(target, args);
	}
	return result;
}

module.exports = Spy;
