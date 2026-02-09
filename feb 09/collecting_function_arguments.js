function greet(greeting, ...names) {
    return `${greeting} ${names.join(' and ')}`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));