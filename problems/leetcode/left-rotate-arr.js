const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')

const sols = createPrototypeSolution();
// [ 1 2 3 4 5 ] 2
sols.ulr = 'https://leetcode.com/problems/rotate-array/description/'
sols.level = sols.levelTag.MEDIUM
sols.defaultSolution = function (_data) {
	let data = _data.data,
		k = _data.k
	for (let i = 0; i < k; i++) {
		let _t = data[0], t, __t
		for (let j = data.length - 1; j > 0; j--) {
			if (!t) {
				t = data[j - 1];
				data[j - 1] = data[j];
			}
			else {
				__t = data[j - 1]
				data[j - 1] = t;
				t = __t;
			}
		}
	    data[data.length -1 ] = _t

	}
	return data;
}


module.exports = { leftRotateByK: exp(sols) }
