const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')

const sols = createPrototypeSolution();
sols.level =  tags.EASY
sols.tags = tags.ARR



sols.ulr = 'https://leetcode.com/problems/missing-number/description/'
sols.defaultSolution = function (data) {
    // consequtive distinct
    //loop over 1 - n
    // ret num if not found in arr
    for(let i = 0; i<= data.length; i++){
	if(!data.includes(i))
	    return i
    }
    throw new Error('Non found')
}

module.exports = { findMissingNum: exp(sols) }
