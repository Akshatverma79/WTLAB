const obj1={a:1, b:2};
const obj2={b:3, d:4};
const combined={...obj1,...obj2};
console.log(combined); // {a: 1, b: 3, d: 4}