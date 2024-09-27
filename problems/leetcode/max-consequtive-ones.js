const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')

const sols = createPrototypeSolution();
sols.level =  tags.EASY
sols.tags = tags.ARR



sols.ulr = 'https://leetcode.com/problems/max-consecutive-ones/description/'

sols.defaultSolution = function (data) {
	let count = 0, maxCount = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i] == 1) {
			count++
			if (count >= maxCount) {
				maxCount = count
			}
		} else {
			count = 0
		}
	}
    return maxCount


}


module.exports = { findMaxConsequitiveOnes: exp(sols) }
