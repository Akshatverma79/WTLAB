function mul(factor, ...numbers) {
    return numbers.map(num => num * factor);
}
console.log(mul(2, 1, 2, 3)); // [2, 4, 6]