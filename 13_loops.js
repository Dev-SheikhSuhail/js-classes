// for loop - Ideal when number of iterations is known in advance.
for (let i = 0; i <= 10; i++) {
  const ele = i;
  console.log(ele);
}

/*-----------------*/

for (let i = 0; i <= 10; i++) {
  const ele = i;
}
// console.log(ele);  // This will give error as ele is block scoped

/*-----------------*/

for (let i = 0; i <= 10; i++) {
  console.log(`Outer Loop: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner Loop: ${j} & Inner Loop: ${i}`);
  }
}

/*-----------------*/
// Multiplication tables
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication table of: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/*-----------------*/

let myArr = ['Sahil', 'Zeeshan', 'Aaqib', 'Aman', 'Anas', 'Aadil'];
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

/*-----------------*/

// break and continue keywords
console.log('Use of break keyword');
for (let i = 1; i <= 20; i++) {
  if (i == 12) {
    console.log(`Exit Loop`);
    break;
  }
  console.log(`Value of i = ${i}`);
}

console.log('Use of continue keyword');
for (let i = 1; i <= 20; i = i + 3) {
  if (i == 13) {
    console.log(`Skipping 13`);
    continue;
  }
  console.log(`Value of i = ${i}`);
}

/*-----------------*/
// while loop - Ideal when don't know the exact number of iterations.
let num = 0;
while (num <= 10) {
  console.log(`Value = ${num}`);
  num = num + 2;
}

/*-----------------*/
let myArr2 = ['Sahil', 'Zeeshan', 'Aaqib', 'Aman', 'Anas', 'Aadil'];
console.log(myArr2.length);
let idx = 0;
while (idx < myArr2.length) {
  console.log(`Element: ${myArr2[idx]}`);
  idx++;
}

/*-----------------*/

// do-while loop - Ideal when we want to run the loop(execute the code) at least once.
let n = 0;
do {
  console.log(`Value = ${n}`);
  n++;
} while (n <= 10);

let n2 = 30;
do {
  console.log(`Value = ${n}`);
  n = n + 2;
} while (n <= 10);
