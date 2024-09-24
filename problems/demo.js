 const { missing_num   } = require('./gl_course/missing-number'); // 
const { largest_lr   } = require('./gl_course/largest-left-right');
const {reverse_array } = require('./gl_course/reverse-array')
const { array_max_diff } = require('./gl_course/array-max-diff')

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
