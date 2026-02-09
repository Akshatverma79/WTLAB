// three dot is rest operator
// it collects multiple arguments  into single array parameter.
function myFunction(...args) {   
    console.log(args);
    myFunction(1, 2, 3, 4, 5);
}
