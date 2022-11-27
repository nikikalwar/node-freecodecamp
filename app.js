//so what are modules

//modules are objects which are used by node js to share libraries or code

//local
const dontShare="dont export this values";

//sharing
const userName="Niki";
const adminName="John";

module.exports={userName,adminName}