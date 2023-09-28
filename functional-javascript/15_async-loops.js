// Fix this code! The callback should be called with all the users loaded.
// The order of the users should match the order of supplied user ids.
// Because this function is asynchronous, we do not care about its return
// value.

// function loadUsers(userIds, load, done) {
// 	var users = []
// 	for (var i = 0; i < userIds.length; i++) {
// 	  	users.push(load(userIds[i]))
// 	}
// 	return users
// }

// module.exports = loadUsers

function loadUsers(userIds, load, done) {
	const users = new Array(userIds.length);
	let completedCount = 0;
	userIds.forEach((userId, index) => {
		load(userId, (user) => {
			users[index] = user;
			completedCount += 1;
			if (completedCount === userIds.length) {
				return done(users);
			}
		});
	});
}

module.exports = loadUsers;
