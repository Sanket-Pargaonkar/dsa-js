const { createPrototypeSolution} = require('../utils/solutionsFactory')
const exp = require('../utils/export-uitil');

const sols = createPrototypeSolution();

sols.problemStatement = `
Given an array arr, return the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

Examples:

Input: arr = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr = [10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist so answer is -1.
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
2 ≤ arr.size() ≤ 105
1 ≤ arri ≤ 105
`

sols.level= sols.levelTag.EASY;
sols.defaultSolution = function findSecondLargest(data){
    let l = data[0], sl = 0
    for(let i = 0; i< data.length; i++){
	if(data[i]> l)
	    l= data[i]
    }
    sl = data[0];
    for(let i = 0; i< data.length; i++){
	if(sl == l && data[i] != l ){
	    sl = data[i];
	}
	if(data[i] == l)continue
	if(data[i]> sl)
	    sl= data[i]
    }
    return sl
}

module.exports = {secondL : exp(sols)}
