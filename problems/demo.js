//  const { missing_num   } = require('./gl_course/missing-number'); // 
// const { largest_lr   } = require('./gl_course/largest-left-right');
// const {reverse_array } = require('./gl_course/reverse-array')
// const { array_max_diff } = require('./gl_course/array-max-diff')
// const { largest_n  } = require('./geeksforgeeks/largest-n')
// const {secondL} = require('./geeksforgeeks/second-largest')
// const { isArrSorted} = require('./leetcode/isArrSorted')
// const { rmDupesSorted} = require('./leetcode/rm-dupes-sorted')
// const { rotateByK} = require('./leetcode/right-rotate-arr')
// const {leftRotateByK } = require('./leetcode/left-rotate-arr')
// const { moveZerosToEnd} = require('./leetcode/move-zeros')
// const { arrUnion } = require('./geeksforgeeks/arr-union')
// const { findMissingNum} = require('./leetcode/find-missing-num')
// const { findMaxConsequitiveOnes}= require('./leetcode/max-consequtive-ones')
const { findSingkleNum } = require('./leetcode/single-number')
data = [1,0,1,2,0]
console.log('DSingle Num in arr: ', data)
console.log(findSingkleNum(data))

// data = [1,0,1,1,3,0,5]
// console.log('Max Consequitive ones in arr: ', data)
// console.log(findMaxConsequitiveOnes(data))

// data = [1,0,3,0,5]
// console.log('Missing Num arr: ', data)
// console.log(findMissingNum(data))

// data = [1,0,3,0,5]
// console.log('moving 0s tpo end ', data)
// console.log(moveZerosToEnd(data))

// data = [1,2,3,4,5]
// console.log('righrotate by 3', data)
// console.log( rotateByK({data, k:1}))
// data = [1,2,3,4,5]
// console.log('left rotate by 3', data)
// console.log( leftRotateByK({data, k:5}))

// console.log(missing_num([1,2,4,5]));
// console.log(missing_num([1,2,4,5],missing_num.solutions.optimisedSolution ));
// largest_lr([4,2,1,3,6,4])
// largest_lr([4,2,1,3,6,4],largest_lr.solutions.optimisedSolution)
// reverse_array([4,2,1,3,6,4])
// reverse_array([4,2,1,3,6,4], reverse_array.twoPointerSolution)
// reverse_array([4,2,1,3,6])
// reverse_array([4,2,1,3,6], reverse_array.twoPointerSolution)
// console.log(reverse_array.problemStatement)
// console.log(array_max_diff.solutions.problemStatement)
// array_max_diff([7, 1, 5, 3, 6, 4])
// largest_n([7, 1, 5, 3, 6, 4])

// console.log('SecondLargest : ',[7, 1, 5, 3, 6, 4] ,secondL([7, 1, 5, 3, 6, 4]))
// console.log('isArrSorted  : ',[7, 1, 5, 3, 6, 4] ,isArrSorted([7, 1, 5, 3, 6, 4]))
// console.log('isArrSorted  : ',[7, 5, 4] ,isArrSorted([7, 5, 4]))
// console.log('isArrSorted  : ',[7, 5, 5, 4] ,isArrSorted([7, 5, 5, 4]))
// console.log('isArrSorted  : ',[7, 5, 5, 6] ,isArrSorted([7, 5, 5, 6]))

// console.log('rm dupes leetcode :', data, rmDupesSorted(data))
// console.log('rm dupes leetcode :', data, rmDupesSorted(data))
