const {a, ...rest}= {a:1, b:2, c:3, d:4};
console.log(a); // 1
console.log(rest); // {b: 2, c: 3, d: 4}