module.exports = function strategyPattern(data, solution, defaultSolution) {
	if (typeof defaultSolution === undefined || defaultSolution === null) {
		throw new Error(`Default Solution not provided defaultSolution argument cannot be ${data}`)
	}

	if (solution && typeof solution != 'function') {
		throw new TypeError("Second Argument must be of type 'functon'")
	}
	if (typeof data === undefined || data === null) {
		throw new Error(`First argument cannot be ${data}`)
	}

	if (!solution) {
		return defaultSolution(data)
	}
	return solution(data)
}
