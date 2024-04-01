// spread and rest operators

// the spread operator allows an iterable such as an array expression or string to be expanded in places that expect multiple arguments.

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(...arr);

const arr3 = [...arr, ...arr2, 100];
console.log("🚀 ~ arr3:", arr3);

// rest

function test(a, b, ...rest) {
  console.log("🚀 ~ test ~ a, b, c:", a, b, rest);
  return "hello";
}

console.log(test(1, 2, 3, 4, 56, 6));
