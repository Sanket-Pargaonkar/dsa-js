function solutionsFactory(solutionsObj) {
	if (!solutionsObj.hasOwnProperty('defaultSolution')) {
		throw new Error("solutions object must have property: defaultSolution")
	}
	if (typeof solutionsObj.defaultSolution === undefined || solutionsObj.defaultSolution === null) {
		throw new Error(`defaultSolution property cannot be ${solutionsObj.defaultSolution}`)
	}

	if (typeof solutionsObj.defaultSolution != 'function') {
		throw new TypeError("solutionsObj.defaultSolution must be of type 'functon'")
	}
	return Object.freeze(solutionsObj)
}

const createPrototypeSolution = function () {
	return Object.create(
		Object.prototype, {
		defaultSolution: {
			value: () => {
				throw new Error("Default Solution not implemented for this problem")
			},
			writable: true,
			enumerable: true,
			configurable: true
		}}
	);
}
module.exports = { createPrototypeSolution, solutionsFactory }
