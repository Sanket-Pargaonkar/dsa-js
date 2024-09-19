/*
  insert update delete read
  search sort traverse
*/
const { stdout } = require("process");

module.exports = function array_2d(i, j) {
	const arr = [];
	const LEN = i;
	const HEIGHT = j;
	let _j = 0;
	while (_j < i) {
		arr.push([])
		_j++
	}
	return {
		//insert
		insert: function (i, j, val) {
			if (i >= LEN) throw new Error("Length of 2d array is " + LEN);
			if (j >= HEIGHT) throw new Error("Height of 2d array is " + HEIGHT);
			arr[i][j] = val
		},
		//update
		update: function (i, j, val) {
			if (i >= LEN) throw new Error("Length of 2d array is " + LEN);
			if (j >= HEIGHT) throw new Error("Height of 2d array is " + HEIGHT);
			arr[i][j] = val
		},
		//delete
		delete: function (i, j, val) {
			if (i >= LEN) throw new Error("Length of 2d array is " + LEN);
			if (j >= HEIGHT) throw new Error("Height of 2d array is " + HEIGHT);
			arr[i][j] = undefined
		},
		//read
		read: function (i, j) {
			if (i >= LEN) throw new Error("Length of 2d array is " + LEN);
			if (j >= HEIGHT) throw new Error("Height of 2d array is " + HEIGHT);

			return arr[i][j];
		},
		// search
		search: function (val) {
			for (i of arr) {
				for (j of i) {
					if (j == val)
						return true;
				}
			}
			return false;
		},
		//sort
		sort: function () {
			for (i of arr) {
				i.sort()
			}
			arr.sort()
		},
		//traverse
		print: function () {
			for (i of arr) {
				for (j of i) {
					stdout.write("" + j);
					stdout.write(" ")

				}
				stdout.write("\n")
			}
		}


	}



}
