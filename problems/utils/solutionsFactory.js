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
		},
		problemStatement: {
			ps: '',
			get() {
				if (this.ps == undefined || this.ps == null) {
					throw new Error('ProblemStatement not set for the problem')
				}
				return this.ps
			},
			set(val) {
				if (typeof val != 'string') {
					throw new TypeError('problemStatement must be of type string. Found ' + (typeof val))
				}
				this.ps = val

			},
			configurable: false,
			enumerable: false
		}
		    
	});

}

module.exports = { createPrototypeSolution, solutionsFactory }
