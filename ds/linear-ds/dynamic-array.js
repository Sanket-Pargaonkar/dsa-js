const { stdout } = require('process');
function dynamicArray(){
    const arr = [];
    return {
	push : function(item){
	    arr.push(item);
	},
	read: function(i){
	    return arr[i];
	},
	print: function(){
	    let i = 0;
	    while(i < arr.length){
		stdout.write(this.read(i).toString());
		stdout.write('\n')
		i++;
	    }
	},
	pop: function(){
	    arr.pop();
	},
	delete: function(pos){
	    arr.splice(pos, 1);
	},
	update: function(pos, val){
	    arr[pos] = val;
	},
	sort: function(){
	    arr.sort();
	},
	search: function(val){
	    return arr.includes(val);
	},
	length: function(){return arr.length},
    }
}

module.exports = dynamicArray;
