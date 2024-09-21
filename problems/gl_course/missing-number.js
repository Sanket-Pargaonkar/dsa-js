const strategyPattern = require('../utils/strategyPattern');
const { createPrototypeSolution, solutionsFactory } = require('../utils/solutionsFactory');

function exec(array, solution) {
	return strategyPattern(array, solution, solutions.defaultSolution)
}
const solutions = createPrototypeSolution()
solutions.defaultSolution = function (data) {
	let full_arr = [];
	let count = 0;

	while (count < data.length) {
		full_arr[data[count] - 1] = data[count++]
	}

	count = 0;
	while (count < full_arr.length) {
		if (full_arr[count++] == undefined)
			break
	}

	return count;
}
solutions.optimisedSolution = function (arr) {
	let count = 0;
	let sum_arr = 0,
		sum_full = 0;
	while (count < arr.length + 1) {
		if (count < arr.length)
			sum_arr += arr[count];
	    sum_full += count+1;
	    count++
	}
	return sum_full - sum_arr
}
module.exports = { solutions: solutionsFactory(solutions), exec };
