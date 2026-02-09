function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));