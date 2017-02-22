module.exports = function check(string, bracketsConfig) {
	const openBrackets = [], closeBrackets = [], stack = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		openBrackets.push(bracketsConfig[i][0]);
		closeBrackets.push(bracketsConfig[i][1]);
	}

	for (let i = 0; i < string.length; i++) {
		if (closeBrackets.some( (n) => n === string[i])) {
			if (stack[stack.length-1] === openBrackets[closeBrackets.indexOf(string[i])] ) {
				stack.pop()
				continue;
			} else {
				stack.push(string[i]);
				continue;
			}
		}
		if (openBrackets.some( (n) => n === string[i])) {
			stack.push(string[i]);
			continue;
		}
	}

	if (stack.length) {
		return false;
	}
	return true;
}