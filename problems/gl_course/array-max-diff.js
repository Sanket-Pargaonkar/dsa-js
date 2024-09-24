const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exportSolution = require('../utils/export-uitil')

const sol = createPrototypeSolution();
sol.problemStatement = `Given prices of stocks price[i] on i th day, could you compute the max profit that could be computed by
doing only 1 transaction.

Example
Input: prices!] = (7, 1, 5, 3, 6, 4]
Output: 5`

sol.defaultSolution = (data) => {
	console.log('Max diff ', data, defSol(data))
}
function defSol(data) {
	let md = data[0] - data[1]
	for (let i = 2; i < data.length; i++) {
		if (data[0] - data[i] > md) {
			md = data[0] - data[i]
		}
	}
	return md;
}


module.exports = { array_max_diff: exportSolution(sol) }
