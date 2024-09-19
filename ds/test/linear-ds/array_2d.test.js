const { describe, test } = require("node:test");
const assert = require("node:assert");
const array_2d = require("../../src/linear-ds/array_2d")
const { exec, execSync } = require("child_process")

describe("Array2d: Tesgin Basic functions", () => {
	test("Should insert a value", () => {
		const arr = new array_2d(2, 2);
		arr.insert(0, 0, 1);
		assert.equal(arr.read(0, 0), 1);

	})
	test("Should throw error when try to insert out of length", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.insert(3, 0) });
	})
	test("Should throw error when try to insert out of height", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.insert(0, 2) });
	})

	test("Should update a value", () => {
		const arr = new array_2d(2, 2);
		arr.update(0, 0, 2);
		assert.equal(arr.read(0, 0), 2);
	})
	test("Should throw error when try to update out of length", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.update(3, 0) });
	})
	test("Should throw error when try to update out of height", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.update(0, 2) });
	})


	test("Should delete a value", () => {
		const arr = new array_2d(2, 2);
		arr.insert(0, 0, 1);
		assert.equal(arr.read(0, 0), 1);
		arr.delete(0, 0, 2);
		assert.equal(arr.read(0, 0), undefined);
	})
	test("Should throw error when try to delete out of length", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.delete(3, 0) });
	})
	test("Should throw error when try to delete out of height", () => {
		const arr = new array_2d(2, 2);
		assert.throws(() => { arr.delete(0, 2) });
	})

	test("Should search a value", () => {
		const arr = new array_2d(2, 2);
		arr.insert(0, 0, 1);
		arr.insert(0, 1, 2);
		arr.insert(0, 0, 3);
		arr.insert(1, 0, 4);
		assert.ok(arr.search(3));
		assert.ok(!arr.search(5));
	})

    test("Should print the arrsay", () => {

	const node_code = `
	const path = 'c:/cygwin64/home/Templ/projects/gitlab/dsa-js/ds/src/linear-ds/array_2d.js';
        const array_2d = require(path);

		const arr = new array_2d(2, 2);
		arr.insert(0, 0, 1);
		arr.insert(1, 0, 4);
		arr.print();
`;
	const _stdout = execSync(`node -e "${node_code}"`);
	// assert.equal(_stdout.toString(), "1 \n4 ")

	})



})
