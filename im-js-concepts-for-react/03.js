// Ternary operator
//

let returnAge = true;

function getAgeInfo(age) {
  return `This person is ${age} years old!`;
}

function getCityInfo() {
  return "This person lives in USA";
}

// if (returnAge) console.log(getAgeInfo(30));
// else console.log(getCityInfo());

returnAge ? console.log(getAgeInfo(30)) : console.log(getCityInfo());
console.log(getAgeInfo);
