const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')

const sols = createPrototypeSolution();

sols.ulr = 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description'
sols.level = tags.EASY
sols.defaultSolution = function (data) {
	for (let i = 0; i < data.length - 1; i++) {
		// check current and next element
		if (data[i] == data[i + 1]) {
			// if found same shift all the subsequent element 1 place to left overwriting i+1 positiion
			lShiftOne(data, i + 1)
			//set data.lenght
			data.length = data.length - 1
		}
	}
	return data;
}
function lShiftOne(data, k) {
	for (let i = k; i < data.length - 1; i++) {
		// i+1 -> data.length -2
		data[i] = data[i + 1]
	}


}

module.exports = { rmDupesSorted: exp(sols) }
