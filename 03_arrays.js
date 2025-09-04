// **********ARRAYS***********
let arr1 = [1, 2, 3];
console.log(arr1[5]);
let arr2 = arr1;
console.log(arr2);
arr2.push(2);
console.log(typeof arr1);

let arr3 = new Array(1, 2, 3, 4);
console.log(typeof arr3);
console.log(arr3.length);
arr3[2] = 9;
console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3.at(-5));

const myArr = [];
myArr.push(5, 7, 'item', 5, 8, 17);
myArr.pop();
myArr.unshift(12);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(5));
console.log(myArr.indexOf(8));
const newArr = myArr.slice(3);
console.log('Sliced Array', newArr);
console.log(myArr);

let myArr2 = [1, 2, 3, 4, 5, 7, 9, 'i1', 'i2', 11, 14, 177];
let myArr3 = [1, 2, 3, 4, 5, 7, 9, 'i1', 'i2', 11, 14, 177];

let r2 = myArr2.join('""');
console.log(r2);
console.log(typeof r2);

let resultArr = myArr2.splice(1, 4);
console.log('Spliced Array', resultArr);

console.log(myArr2);

let resultArr2 = myArr3.splice(1, 0, 'ele1', 'elem2', 45, 78, 79);
console.log('Resulted Array:', resultArr2);
console.log('Original:', myArr3);
