module.exports = function check(string, bracketsConfig) {
	const openBrackets = [], closeBrackets = [], equalBrackets = [], stack = [], countArray = [];
	let count = 0, index;

	for (let i = 0; i < bracketsConfig.length; i++) {
		if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
			equalBrackets.push(bracketsConfig[i][0]);
			countArray[count] = 0;
			count++;
		} else {
			openBrackets.push(bracketsConfig[i][0]);
			closeBrackets.push(bracketsConfig[i][1]);
		}
	}

	for (let i = 0; i < string.length; i++) {
		
		if (openBrackets.some( (n) => n === string[i] )) {
			stack.push(string[i]);
			continue;
		}
		
		if (closeBrackets.some( (n) => n === string[i] )) {
			if (stack.pop() === openBrackets[closeBrackets.indexOf(string[i])] ) {
				continue;
			} else {
				return false;
			}
		}

		index = equalBrackets.indexOf(string[i]);
		if (index !== -1) {
			if (!(countArray[index])) {
				stack.push(string[i]);
				countArray[index]++;
				continue;
			} else {
				if (stack[stack.length-1] === string[i]) {
					stack.pop();
					countArray[index]--;
					continue;
				} else {
					countArray[index]++;
					stack.push(string[i]);
					continue;
				}
			}
		}
	}

	if (stack.length) {
		return false;
	}

	return true;
}