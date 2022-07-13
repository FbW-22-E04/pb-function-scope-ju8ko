//1
function exponentialValuesCalc(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log("the values are numbers");
  } else {
    console.log("the values aren't numbers");
  }
  for (let i = 1; i <= num2; i++) {
    console.log(num1 ** i);
  }
}
exponentialValuesCalc(3, 5);

//2
const fruit = "mango";
function printFavoriteFruit() {
  console.log("My favorite fruit is", fruit);
}
printFavoriteFruit(fruit);

//3
function exponent(a, b) {
  const result = a ** (b + 1);
  console.log("exponent:", result);
}
exponent(2, 1);

// 2, 1 => 2 | 4
// 2, 2 => 4 | 8
// 2, 3 =>
