const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')

const sols = createPrototypeSolution();
//[1 2 3 4 5 6] 2
// 5 ->  length - pos  +1 5 - 5 
// 4 ->  5-4

sols.ulr = 'https://leetcode.com/problems/rotate-array/description/'
sols.defaultSolution = function (_data) {
	let data = _data.data,
		k = _data.k
	for (let i = data.length - 1; i > data.length - 1 - k; i--) {
		swap(data, data.length - 1 - i, i)
	}
	return data;
}
function swap(data, i, k) {
	let t = data[i]
	data[i] = data[k]
	data[k] = t
}

module.exports = { rotateByK: exp(sols) }
