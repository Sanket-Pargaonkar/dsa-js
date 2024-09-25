const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')

const sols = createPrototypeSolution();
sols.url = 'https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=union-of-two-sorted-arrays'
sols.defaultSolution = (data) => {
	let arr1 = data[0], arr2 = data[2], union = [];
	if (data[0].length > data[1].length) 
		arr1 = data[0], arr2 = data[1]
	else
	    	arr1 = data[1], arr2 = data[0]


	for (let i = 0; i < arr1.length; i++) {
		if (exists(arr2, i)) {
			union.push(i)
		}
	}
	return union

}
function exists(data, num) {
	for (let i = 0; i < data.length; i++) {
		if (num == data[i]) {
			return true
		}
	}
	return false
}

sols.level = sols.levelTag.EASY

module.exports = { arrUnion: exp(sols) }
