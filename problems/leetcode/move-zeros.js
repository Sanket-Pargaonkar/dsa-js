const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')

const sols = createPrototypeSolution();
sols.level =  tags.EASY
sols.tags = tags.ARR


// [ 1 0 3 0 5 ] 2
sols.ulr = 'https://leetcode.com/problems/move-zeroes/description/'
sols.defaultSolution = function (data) {
	for (let i = 0; i < data.length; i++) {
		//if 0 move it to the end
		if (data[i] == 0) {
			for (let j = i; j < data.length - 1; j++) {
				swap(data, j, j + 1)
			}
		}

	}
	return data;
}
function swap(data, i, j) {
	let t = data[j];
	data[j] = data[i]
	data[i] = t
}


module.exports = { moveZerosToEnd: exp(sols) }
