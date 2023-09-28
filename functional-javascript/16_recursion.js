// Implement a recursive function that returns all of the unique
// dependencies, and sub-dependencies of a module, sorted alphabetically.
// Dependencies should be printed as dependency@version e.g. []()'.

// Multiple versions of the same module are allowed, but duplicates
// modules of the same version should be removed.

function getDependencies(tree) {
	const dependenciesList = new Set();

	const dfs = (node) => {
		if (!node.dependencies) return;
		const dependencies = node.dependencies;
		Object.keys(dependencies).forEach((dependencyName) => {
			const version = dependencies[dependencyName].version;
			const hash = `${dependencyName}@${version}`;
			dependenciesList.add(hash);
			dfs(dependencies[dependencyName]);
		});
	};
	dfs(tree);

	return [...dependenciesList].sort();
}

module.exports = getDependencies;
