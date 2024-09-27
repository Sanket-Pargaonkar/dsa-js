const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')
const tags = require('../utils/tags')

const sols = createPrototypeSolution();
sols.level =  tags.EASY
sols.tags = tags.ARR


sols.problemStatement = `Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
 `
sols.ulr = 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/'
sols.defaultSolution = function (data) {
	// all equal, all desc, all asc, mix of equal and asc/desc
	//check if asc/dessc
	let asc = false, desc = false;
	// [ 7, 1, 5, 3, 6, 4 ]
	for (let i = 0; i < data.length - 1; i++) {
		if (data[i] <= data[i + 1]) {
			asc = true
		} else {
			asc = false
			break
		}

	}
	if (asc) return asc

	for (let i = 0; i < data.length - 1; i++) {
		if (data[i] >= data[i + 1]) {
			desc = true
		} else {
			desc = false
			break
		}

	}
	return desc


}

module.exports = { isArrSorted: exp(sols) }
