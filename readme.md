globals --no window

__dirname--path to current directory
__filename--file name
__require -- function to use module
process -- info about the env the program being executed
module -- info about the current module (file)
console --


//console.log(process.env);
"use strict";
let a=5;
console.log(__dirname);
console.log(__filename);
console.log(typeof require);
//require is a function that imports the module
console.log(typeof console.log);
console.log(typeof this);
console.log(this);
let b;
console.log(b,"b value here")
console.log(typeof b)
console.log(undefined===NaN)
function doNothing(){
   
}

doNothing();