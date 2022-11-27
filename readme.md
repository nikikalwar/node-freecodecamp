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

so we have callbacks so why promises
or whats the difference between callbacks and promises

promises are javascript objects which represent the eventual completion of an asynchronous operation
//callbacks on the other hand are javascript functions which execute after a particular task is complete
//promises have inbuilt error handling
//code is much more structured
//the coupling is low.

//where is node.js used
SPA
real time communications
Streaming applications,
real time collaboration tool
microservices architecture
Internet of thinngs

it can handle multiple network requests, but can process only one event at a time
