// it  will give error because function expression is not hoisted

hello();
var hello=function(){
    console.log("Hello World");
}