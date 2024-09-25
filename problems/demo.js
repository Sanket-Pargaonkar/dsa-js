 const { missing_num   } = require('./gl_course/missing-number'); // 
const { largest_lr   } = require('./gl_course/largest-left-right');
const {reverse_array } = require('./gl_course/reverse-array')
const { array_max_diff } = require('./gl_course/array-max-diff')
const { largest_n  } = require('./geeksforgeeks/largest-n')
const {secondL} = require('./geeksforgeeks/second-largest')
const { isArrSorted} = require('./leetcode/isArrSorted')
const { rmDupesSorted} = require('./leetcode/rm-dupes-sorted')

// console.log(missing_num([1,2,4,5]));
// console.log(missing_num([1,2,4,5],missing_num.solutions.optimisedSolution ));
largest_lr([4,2,1,3,6,4])
largest_lr([4,2,1,3,6,4],largest_lr.solutions.optimisedSolution)
// reverse_array([4,2,1,3,6,4])
// reverse_array([4,2,1,3,6,4], reverse_array.twoPointerSolution)
// reverse_array([4,2,1,3,6])
// reverse_array([4,2,1,3,6], reverse_array.twoPointerSolution)
// console.log(reverse_array.problemStatement)
console.log(array_max_diff.solutions.problemStatement)
array_max_diff([7, 1, 5, 3, 6, 4])
largest_n([7, 1, 5, 3, 6, 4])

console.log('SecondLargest : ',[7, 1, 5, 3, 6, 4] ,secondL([7, 1, 5, 3, 6, 4]))
console.log('isArrSorted  : ',[7, 1, 5, 3, 6, 4] ,isArrSorted([7, 1, 5, 3, 6, 4]))
console.log('isArrSorted  : ',[7, 5, 4] ,isArrSorted([7, 5, 4]))
console.log('isArrSorted  : ',[7, 5, 5, 4] ,isArrSorted([7, 5, 5, 4]))
console.log('isArrSorted  : ',[7, 5, 5, 6] ,isArrSorted([7, 5, 5, 6]))
data = [1,2,3,3,4,5,6,6,7,8]
console.log('rm dupes leetcode :', data, rmDupesSorted(data))
