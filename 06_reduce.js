const arr = [12, 15, 18, 22, 24, 27, 32, 9, 25, 70, 3];

console.log(arr);

//SUM OF NUMBERS/VALUE OF AN ARRAY
function getSum(ele) {
  let sum = 0;
  for (let i = 0; i < ele.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(getSum(arr));

// Using reduce()
const result = arr.reduce((accum, currVal) => (accum = accum + currVal), 0);
console.log('Result:', result);

// MAXIMUM VALUE
const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output);
