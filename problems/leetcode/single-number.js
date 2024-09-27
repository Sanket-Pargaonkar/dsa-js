const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')


const sols = createPrototypeSolution();
sols.level =  tags.EASY
sols.tags = tags.ARR


sols.ulr = 'https://leetcode.com/problems/single-number/description/'

sols.defaultSolution = function (data) {
	// take arr,
	const dupes = [];
	for (let i = 0; i < data.length; i++) {
		if (dupes.includes(data[i])) continue;
		let found = false
		// check if num occurs twice and not in arr
		for (let j = i + 1; j < data.length; j++) {
			if (data[i] == data[j]) {
				//if yes
				// add num to arr if it is fond twice
				dupes.push(data[i]);
				found = true
			}

		}
		//if not ret that num
		if (!found) return data[i]

	}
	// 
	throw new Error('No single Element found')
}

module.exports = { findSingkleNum: exp(sols) }
