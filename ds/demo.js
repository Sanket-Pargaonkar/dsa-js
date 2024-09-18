const dynamicArray = require( './linear-ds/dynamic-array');
const { stdout } = require('process');



function demoDynamicArray(){
    let a = dynamicArray();

    a.push(1);
    a.push('a');
    stdout.write('2 Elements added');
    stdout.write('\n')
    a.print();
    a.pop();
    stdout.write('1 Element popped');
    stdout.write('\n')
    a.print();
    stdout.write(a.length());
    stdout.write('\n')    
}

demoDynamicArray();
