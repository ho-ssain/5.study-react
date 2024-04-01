// Object and array Destructuring
// Shorted Property names

const id = 1;
const title = "Apple";
const rating = 4.5;

const product = {
  id,
  title,
  rating,
};
console.log("🚀 ~ product:", product);

const product1 = {
  proName: "Orange",
  des: "this is a product 1",
};

let { proName: n, des } = product1;
console.log("🚀 ~ name:", n);
console.log("🚀 ~ des:", des);

const arr = [3, 6, 9];

let [a, , b] = arr;
console.log("🚀 ~ b:", a);
console.log("🚀 ~ a:", b);
