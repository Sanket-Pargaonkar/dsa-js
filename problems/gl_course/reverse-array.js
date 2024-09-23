const { createPrototypeSolution } = require('../utils/solutionsFactory')
const exportSolutions = require('../utils/export-uitil')

const sols = createPrototypeSolution();
sols.defaultSolution = function (data) {
	console.log('original array: ', data)
	let i = 0

	while (i < data.length/2 ) {
		let t = data[i];
		data[i] = data[data.length - 1 - i]
		data[data.length - 1 - i] = t;
		i++
	}

	console.log('reversed array: ', data)
}
module.exports = { reverse_array: exportSolutions(sols) }
