function calculateSum(a, b, c) {
    return a + b + c;
}

const numbers = [5, 10, 15];
console.log(calculateSum(...numbers));

const scores = [85, 92, 78, 95, 88];
console.log(Math.max(...scores));

const prices = [250, 180, 320, 150, 200];
console.log(Math.min(...prices));
