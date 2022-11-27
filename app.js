//so callbacks what are callbacks

//basically callbacks are the functions which get executed after the main function is executed

let objectModels=["DOM","VDOM","BOM"];

const myFunc=(arr,cb)=>{
    for(let i=0;i<arr.length;i++){
        const element=arr[i];
        cb(element)
    }
}

myFunc(objectModels,cb);

function cb(element){
    console.log(element)
}