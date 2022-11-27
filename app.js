//buffers
//buffers are used to represent data types of fixed length size

//class is a blueprint to create and initialize objects

import {Buffer} from 'buffer'

//console.log(buffer.toString());

//how to create a small buffer

let newData=Buffer.alloc(10);
console.log(newData);

//buffers are used for storing raw data-- that is binary data
//javascript is great at handling string data but not so good at Binary data
//also this leads to desinging the API to be string based and not to handle binary data

let userPassword="test string";
let buffer=Buffer.alloc(16);
buffer.write(userPassword);
console.log(buffer)
let stringBuffer=buffer.toString();
console.log(stringBuffer);
console.log(typeof buffer);
console.log(Buffer.isBuffer(buffer))