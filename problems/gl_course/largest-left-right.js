const strategyPattern = require('../utils/strategyPattern');
const { createPrototypeSolution, solutionsFactory } = require('../utils/solutionsFactory');

function exec(array, solution) {
	return strategyPattern(array, solution, solutions.defaultSolution);
}
const solutions = createPrototypeSolution()
solutions.defaultSolution = function (data) {
	let count = 0;
	console.log("input: ", data)
	//left arrary
	let leftArr = []
	while (count < data.length) {

		if (count == 0) {
			leftArr[count] = -1
			count++
			continue;
		}
		leftArr[count] = data[count - 1]
		let ic = count, lmax = data[count]

		while (ic >= 0) {

			if (lmax < data[--ic]) {
				lmax = data[ic]
			}

		}
		leftArr[count] = lmax == data[count] ? -1 : lmax
		count++
	}
	console.log("left : ", leftArr)

	//right arrary
	let rightArr = []
	count = data.length - 1
	while (count >= 0) {
		if (count == data.length - 1) {
			rightArr[count] = -1
			count--
			continue;
		}
		rightArr[count] = data[count + 1]
		let ic = count, rmax = data[count]

		while (ic <= data.length - 1) {
			if (rmax < data[++ic]) {
				rmax = data[ic]
			}

		}
		rightArr[count] = rmax == data[count] ? -1 : rmax
		count--
	}
	console.log("right : ", rightArr)

}

solutions.optimisedSolution = function (data) {
	// build left max arr

	let ct = 0, larr = [], mx = data[0];
	while (ct < data.length) {

		if (data[ct] > mx) {
			mx = data[ct]
		}
		larr[ct] = mx
		ct++
	}
	// compawre and update it and print
	ct = 0
	while (ct < data.length) {

		if (data[ct] == larr[ct]) {
			larr[ct] = -1
		}
		ct++
	}
	console.log('larr : ', larr)
	// build rt max arr
	let rarr = []
	ct = data.length - 1, mx = data[data.length - 1]
	while (ct >= 0) {
		if (data[ct] > mx) {
			mx = data[ct]
		}
		rarr[ct] = mx
		ct--
	}

	// compawre and update it and print
	ct = 0
	while (ct < data.length ) {
	    if (data[ct] == rarr[ct]) {
			rarr[ct] = -1
		}
		ct++
	}
	console.log('rarr : ', rarr)
};
exec.solutions = solutionsFactory(solutions)

module.exports = { largest_lr: exec };
