/*
 *Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 */
//[1,1,3,4] -> [1,3,4] -> 3
// storage_arry = []
// loop: input arr
//   1. add curr to storage_arr
//   2. if curr is there in storage arr //if there then this is duplicate
//   3. storage_arr will result arr


function remDups(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (!res.includes(arr[i])) {
			res.push(arr[i]);
		}
	}
	return res;
}
// let res = remDups([1, 1, 2])
// console.log(res.length, res);

/*
  *An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
  */
//[1,2,3]
//[1,3,2]

function isMonotone(nums) {
	let asc = true;
	let desc = true;
	// let j = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			asc = false;
		}
		if (nums[i] > nums[i - 1]) {
			desc = false;
		}
		// j++;
	}
	return asc || desc;
}
console.log(isMonotone([1, 3, 4]));


//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// res -> same length
// loop: 0-> k-1, k -> arr.length
function rotateK(arr, k) {

	return arr.slice(k+1, arr.length ).concat(arr.slice(0, k+1));
}


console.log(rotateK([1,2,3,4,5,6,7], 3));//[2,3,4,5,1]
