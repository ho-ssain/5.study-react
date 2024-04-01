/**
 * Logical Operator AND (&&), OR (||)
 * We can call them as a short circuit evolution.
 */

function getName() {
  return "Hossain";
}

let a = true;
let b = false;

console.log(a && b);
// Output: false

console.log(a || b);
// Output: true

console.log(a && getName());
// Output:  Hossain

console.log(b && getName());
// Output:  false

console.log(a || getName());
// Output:  true

console.log(b || getName());
// Output:  Hossain
