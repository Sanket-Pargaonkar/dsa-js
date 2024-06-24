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
	length: function(){return arr.length},
    }
}

module.exports = dynamicArray;
