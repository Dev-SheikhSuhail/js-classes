// Scope in JS

let x = 300;
const y = 200;
var z = 400;
if (true) {
  let x = 10;
  const y = 20;
  var z = 50;
  // console.log("Inside One: ", x);
}

console.log(x);
console.log(y);
console.log(z);

function firstFun() {
  const user = 'Sahil';
  function secondFun() {
    const med = 'YT';
    console.log(user);
  }
  console.log(med);

  secondFun();
}

firstFun();

if (true) {
  const username = 'Zeeshan';
  if (username === 'Zeeshan') {
    const medium = ' YouTube';
    // console.log(username + medium);
  }
  // console.log(medium);
}
// console.log(username);

// Function Hoisting in JS
console.log(add(5));

function addone(num) {
  return num + 1;
}

//Function Expression
addNum(5);
const addNum = function (num) {
  return num + 2;
};
