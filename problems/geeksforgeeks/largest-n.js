const { createPrototypeSolution } = require('../utils/solutionsFactory');
const exp = require('../utils/export-uitil')

const sols = createPrototypeSolution();
sols.problemStatement = `
Given an array, arr. The task is to find the largest element in it.

Examples:

Input: arr = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
Input: arr = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of the given array is 5.
Input: arr = [10]
Output: 10
Explanation: There is only one element which is the largest.
Expected Time Complexity: O(n)
Expected Space Complexity: O(1)

https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array
`;

sols.defaultSolution = (data) => {
	console.log('input:', data)
	console.log(findMax(data))

}
function findMax(data) {
	let max = data[0]
	for (let i = 0; i < data.length; i++) {
		if (data[i] > max)
			max = data[0]
	}
	return max

}

sols.level = sols.levelTag.EASY

module.exports = {largest_n: exp(sols)}
