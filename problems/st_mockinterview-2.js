//find largest integer in an array of integers

// loop over the array
// store value in var: max_num
// in each iteration update max_num
// if(current num > max_num)

function findMax(arr) {
	let max = arr[0];
	let second = arr[1];
	if (max < second) {
		max = arr[1];
		second = arr[0];
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
		    max = arr[i];
		}else if(arr[i] > second && arr[i] != max){
		    second = arr[i];
		}
	}
	return second;
}

console.log(findMax([1, 100, 54, 6, 7, 32]));

