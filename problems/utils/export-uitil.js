const strategyPattern = require('./strategyPattern');
const { createPrototypeSolution, solutionsFactory } = require('./solutionsFactory');



module.exports = function exportSolutions(solutions) {
	function exec(array, solution) {
		return strategyPattern(array, solution, solutions.defaultSolution);
	}

	exec.solutions = solutionsFactory(solutions)
	return exec
}
