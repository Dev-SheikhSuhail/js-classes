function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log('Result: ', result);

function loginUserMessage(username = 'Aadil') {
  if (!username) {
    console.log('Please enter a Username');
    return;
  }
  return `${username} has just logged in`;
}

console.log(loginUserMessage('Sahil'));
console.log(loginUserMessage('Zeeshan'));

function totalPrice(val1, val2, ...num1) {
  return num1;
}

console.log(totalPrice(200, 400, 500, 2500));

const user = {
  username: 'Sahil',
  age: 99,
};

function handleObj(anyobject) {
  console.log(`Username is ${anyobject.username} and Age is ${anyobject.age}`);
}

handleObj(user);
// handleObj({
//     username: "Zeeshan",
//     age: 9
// })

const myNewArray = [200, 400, 100, 500];

function returnValue(getArray) {
  return getArray[1];
}

// console.log(returnValue(myNewArray));
console.log(returnValue([200, 400, 500, 1000]));
