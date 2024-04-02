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
const totalAge = persons.reduce(
  (total, nextPerson) => total + nextPerson.age,
  0
);
console.log("🚀  ~ totalAge: ", totalAge);
// Output - The sum of all ages in the array

//!==>  method .........................
//!==> method .........................
