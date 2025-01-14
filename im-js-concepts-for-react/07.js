// Arrow functions and ES6 methods
// =================================

// function  sum(a, b) { return a + b; }

// const sum = (a, b = 54) => a + b;
// console.log("🚀 ~ sum:", sum(12));

//!=> map method................................
const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 27 },
];

const getPersonInfo = persons.map((person, index) => [person.name, person.age]);
console.log("🚀  ~ gePersonNames: ", getPersonInfo);
// Output-: [ ['John', 30], ['Jane', 27] ]

//!=> filter method ....................

const isAdult = ({ age }) => age >= 18;
const filteredPersons = persons.filter(isAdult);
console.log("🚀  ~ filteredPersons: ", filteredPersons);

//!==> some and every method .........................
const somePerson = persons.some(isAdult);
console.log(`Someone is an adult? ${somePerson}`);

const everyPerson = persons.every(isAdult);
console.log(`Everyone is an adult? ${everyPerson}`);

//!==> find method .........................
const findPerson = persons.find(({ age }) => age === 27);
console.log(`The person with age  27 is: `, findPerson);

//!=> reduce method ..........................
const totalAge = persons.reduce((total, nextPerson) => {
  console.log(nextPerson.age);
  console.log(total);
  return total + nextPerson.age;
}, 0);
console.log("🚀  ~ totalAge: ", totalAge);
// Output - The sum of all ages in the array

//!==> includes method .........................
const hasJohn = persons.includes({ name: "John" });
console.log(`Does John exist? ${hasJohn}`);

const fruits = ["apple", "banana", "mango"];
const hasMango = fruits.includes("mango");
console.log(`Does mango exist? ${hasMango}`);

//!==> indexOf method .........................
let johnIndex = persons.indexOf(persons.find((p) => p.name == "John"));
console.log(`John's Index: ${johnIndex}`);

//!==> findIndex method .........................
johnIndex = persons.findIndex((person) => person.name === "John");
console.log(`John's Index (using findIndex): ${johnIndex}`);
