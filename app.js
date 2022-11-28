
const balancer=(string)=>{
    let str=string;
    if(str.length===0) return console.log("empty params passed")
    let popArr=str.split("")
    if(str.length%2!==0) return console.log("Not Balanced");
    else{
        let strArr=string.split("");
        let length=strArr.length;
        let reverseString=string.split("");
        reverseString=reverseString.reverse();
        for(let i=0;i<(length/2);i++){
            if(strArr[i]==='{' && reverseString[i]==='}'){
                popArr.shift();
                popArr.pop();
            }
            if(strArr[i]==='[' && reverseString[i]===']'){
                popArr.shift();
                popArr.pop();
            }
            if(strArr[i]==='(' && reverseString[i]===')'){
                popArr.shift();
                popArr.pop();
            }
        }
        if(popArr.length>0) return "NO";
        else return "YES"
}}

let result=balancer('{[()]}');
console.log(result)
result=balancer('{[(])}');
console.log(result)
result=balancer('{{[[(())]]}}')
console.log(result)
