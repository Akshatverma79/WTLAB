// 1)  const with Objects
const student = {
    name: "Amit",
    age: 20
};
student.age = 21; // Allowed
console.log(student);

//2) Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3));

//3) Problem with this in Traditional Functions
const student = {
    name: "Amit",
    showName: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};
student.showName();

//4) Arrow Functions and Lexical this
// Correct Example Using Arrow Function
const student = {
    name: "Amit",
    showName: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

student.showName();

//5)  Lexical this with Event Simulation
function Button() {
    this.text = "Click Me";

    setTimeout(() => {
        console.log(this.text);
    }, 500);
}

const btn = new Button();

//6) Arrow Function Without Lexical this (Error Case)
const obj = {
    value: 10,
    method: () => {
        console.log(this.value);
    }
};

obj.method();

//7) Example: Variable Interpolation:
let name = "Rahul";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

//8) Expressions Inside Template Literals
let a = 10;
let b = 20;

console.log(`Sum of a and b is ${a + b}`);

//9) Skipping Elements
let colors = ["Red", "Green", "Blue"];

let [first, , third] = colors;
console.log(first, third);

//10) Basic Example:
let student = {
    name: "Amit",
    age: 22,
    course: "B.Tech"
};

let { name, age } = student;
console.log(name, age);

//11) Renaming Variables
let student = {
    name: "Amit",
    age: 22
};

let { name: studentName, age: studentAge } = student;
console.log(studentName, studentAge);

//12)  Default Values in Object Destructuring
let employee = {
    id: 101,
    name: "Ravi"
};

let { id, name, salary = 30000 } = employee;
console.log(id, name, salary);

//13) Destructuring in Function Parameters
function display({ name, age }) {
    console.log(name, age);
}

display({ name: "Neha", age: 24 });

//14) Destructuring in Function Parameters
function display({ name, age }) {
    console.log(name, age);
}

display({ name: "Neha", age: 24 });

//15) Using Rest Parameter in Functions
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5))

//16)Collecting Function Arguments
function greet(greeting, ...names) {
return `${greeting}, ${names.join(' and ')}`;
}
console.log(greet("Pranjal", "Tanamaya", "Sonam"));

//17) Filtering Properties in Objects
const { a, ...rest } = { a: 1, b: 2, c: 3 }; console.log(a)
console.log(rest)

//18) Destructuring with Rest
const [first, ...rest] = [1, 2, 3, 4]; 
console.log(first)
console.log(rest)

//19)  4.	Function Default Parameters
function mul(factor, ...nums) {
return nums.map(num => num * factor);
}
console.log(mul(2,1,2,3,4,5))

//20)Spread operator
const n = [1, 2, 3];
const ne = [...n, 4, 5]; console.log(ne);

//21) 1.	Merging Arrays
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2]; console.log(merged)

//22) 2.	Cloning Arrays
const original = [10, 20, 30]; const clone = [...original]; console.log(clone)

//23) 3.	Combining Objects
const obj1 = { a: 1, b: 2 }; 
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 }; 
console.log(combined)

//24) Synchronous Example
console.log("Start");
console.log("Task running");
console.log("End");

//25) Asynchronous Example
console.log("Start");

setTimeout(() => {
  console.log("Task running");
}, 2000);

console.log("End");

//26) Example: Creating a Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

//27) Complete Promise Example (then + catch)
let loginPromise = new Promise((resolve, reject) => {
  let passwordCorrect = false;

  if (passwordCorrect) {
    resolve("Login successful");
  } else {
    reject("Invalid password");
  }
});

loginPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
Output
Invalid password

//28) Promise with setTimeout (Async Simulation)
let dataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched from server");
  }, 3000);
});
dataPromise.then((data) => {
  console.log(data);
});

//29) Example with Error Condition
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Division by zero not allowed");
    } else {
      resolve(a / b);
    }
  });
}

divide(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//30) Chaining Promises
new Promise((resolve) => {
  resolve(5);
})
.then((num) => {
  return num * 2;
})
.then((result) => {
  console.log(result);
});

//Sample Problems 
//(a) Function using Rest Operator to accept multiple numbers and return their sum
//🔹 Concept
//•	Rest operator (...) collects multiple arguments into an array.
//🔹 Code
function sumNumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// Function call
console.log("Sum:", sumNumbers(10, 20, 30, 40));


// (b) Merge two arrays using Spread Operator
// 🔹 Concept
// •	Spread operator (...) expands array elements.
// 🔹 Code
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log("Merged Array:", mergedArray);
// 🔹 Output
// // Merged Array: [1, 2, 3, 4, 5, 6]

// (c) Copy and update an object using Spread Operator
// 🔹 Concept
// •	Spread operator copies object properties.
// •	Prevents modification of original object.
// 🔹 Code
let student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech"
};

let updatedStudent = {
    ...student,
    age: 21,
    city: "Delhi"
};

console.log("Original Object:", student);
console.log("Updated Object:", updatedStudent);


//(d) Passing array elements as function arguments using Spread Operator
// 🔹 Concept
// •	Spread operator expands array values into individual arguments.
// 🔹 Code
function multiply(a, b, c) {
    return a * b * c;
}

let values = [2, 3, 4];

let result = multiply(...values);

console.log("Multiplication Result:", result);


// 2. Write ES6 Promise that:
// e.	Resolves after 2 seconds with a success message.
// f.	Rejects if a condition fails.
// g.	Consume the Promise using then() and catch().
// h.	Display appropriate success or error messages.
// Sol: ES6 Promise Code
// Creating a Promise
let myPromise = new Promise((resolve, reject) => {

    let isOperationSuccessful = true; // change to false to test rejection

    setTimeout(() => {
        if (isOperationSuccessful) {
            resolve("✅ Operation completed successfully!");
        } else {
            reject("❌ Operation failed due to an error.");
        }
    }, 2000); // 2 seconds delay
});


// Consuming the Promise
myPromise
    .then((successMessage) => {
        console.log("SUCCESS:", successMessage);
    })
    .catch((errorMessage) => {
        console.log("ERROR:", errorMessage);
    });
