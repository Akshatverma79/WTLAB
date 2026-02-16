const originalObject = {
    name: "Akshat",
    age: 25,
    city: "New York"
};
const updatedObject = {
    ...originalObject,
    age: 26,
    country: "USA"
};
const personalInfo = {
    name: "Akshat2",
    age: 30
};

const contactInfo = {
    email: "akshat@gmail.com",
    phone: "123-456-7890"
};

const completeInfo = { ...personalInfo, ...contactInfo };
console.log("Complete Info:", completeInfo);
