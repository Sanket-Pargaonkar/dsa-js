const TAG_ENUM = require('./tags')

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
			get() {
				if (problemStatement == undefined || problemStatement == null) {
					throw new Error('ProblemStatement not set for the problem')
				}
				return problemStatement
			},
			set(val) {
				if (typeof val != 'string') {
					throw new TypeError('problemStatement must be of type string. Found ' + (typeof val))
				}
				problemStatement = val

			},
			configurable: false,
			enumerable: false
		}, level: {
			configurable: false,
			enumerable: false,
			set(val) {
				if (!Object.values(TAG_ENUM).includes(val)) {
					throw new Error('Tag must a valid synmbol from file: problems/utils/tags.js : ' + Object.keys(TAG_ENUM))
				}
				level = val
			},
			get() {
				return level
			}

		},
		tags: {
			configurable: false,
			enumerable: false,
			set(val) {
				if (!Object.values(TAG_ENUM).includes(val)) {
					throw new Error('Tag must a valid synmbol from file: problems/utils/tags.js : ' + Object.keys(TAG_ENUM))
				}
				level = val
			},
			get() {
				return level
			}

		},
		url: {

			value: '',
			writable: true,
			configurable: false,
			enumerable: false
		},


	});

}


module.exports = { createPrototypeSolution, solutionsFactory }
