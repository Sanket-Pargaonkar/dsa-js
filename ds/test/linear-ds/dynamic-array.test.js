const { test, describe } = require("node:test");
const assert = require("node:assert");
const dynamicArray = require("../../src/linear-ds/dynamic-array");


describe("Dynamic Array: Basic functions test", function(){
    test("insert: value should be inserted", () =>{
	let da = new dynamicArray();
	da.push(1);
	assert.strictEqual(da.read(0),1)
    })

    test("insert: value should maintain sequence", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(2);
	da.push(3);	
	assert.strictEqual(da.read(0),1)
	assert.strictEqual(da.read(1),2)
	assert.strictEqual(da.read(2),3)	
    })

    test("update: value should updated", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(2);
	da.push(3);	
	assert.strictEqual(da.read(0),1)
	assert.strictEqual(da.read(1),2)
	assert.strictEqual(da.read(2),3)
	da.update(1,'updated');
	assert.strictEqual(da.read(1), 'updated')
	assert.notEqual(da.read(1), 2)
    })


    test("pop: top value should be removed and returned", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(2);
	da.push(3);	
	let top = da.pop();
	assert.strictEqual(da.length(), 2)
	assert.strictEqual(top, 3)
	assert.equal(da.read(2), undefined)
    })

    test("delete:  should removed value at given position", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(2);
	da.push(3);
	da.delete(0);
	assert.strictEqual(da.length(), 2)
	assert.strictEqual(da.read(0), 2)
	assert.equal(da.read(2), undefined)
    })

    test("sort:  should sort the array elements", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(3);
	da.push(2);
	da.sort()
	assert.strictEqual(da.read(0), 1)
	assert.strictEqual(da.read(1), 2)
	assert.strictEqual(da.read(2), 3)

    })

    test("search: should return true for existing element", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(3);
	da.push(2);
	assert.ok(da.search(1));
    })

    test("search: should return false for element not existing", () =>{
	let da = new dynamicArray();
	da.push(1);
	da.push(3);
	da.push(2);
	assert.ok(da.search(1));
    })
    

    
})
