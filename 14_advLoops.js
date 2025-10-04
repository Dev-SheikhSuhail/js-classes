// for...of loop - used to iterate over iterable objects (arrays, strings, sets, etc.), accessing the values directly.

const arr = [1, 2, 3, 4, 5, 7, 9];
for (const num of arr) {
  console.log(num);
}

/*-----------------*/

const message = 'Welcome to 60 Days of JavaScript';
for (const letter of message) {
  console.log(`Each character is: ${letter}`);
}

/*-----------------*/

// const myObj = {
//   name: 'Sahil',
//   address: 'Khrew',
// };

// for (const key of myObj) {
//   console.log(key);
// }

// for...in loop - used to iterate over enumerable properties of an object.
const myObj = {
  name: 'Sahil',
  address: 'Khrew',
  dob: '01-01-1999',
};
// keys
for (const key in myObj) {
  console.log(key);
}
// keys with values
for (const key in myObj) {
  console.log(`${key} => ${myObj[key]}`);
}

const skills = ['HTML', 'CSS', 'JS', 'ReactJS', 'Python'];
// keys
for (const key in skills) {
  console.log(key);
}
// values
for (const key in skills) {
  console.log(skills[key]);
}

/*-----------------*/
//forEach() - This method(higher order function) executes a provided function once for each array element.
const countries = [
  'India',
  'USA',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Russia',
  'Canada',
  'Malaysia',
  'Australia',
  'China',
  'Japan',
  'Korea',
];
countries.forEach(function (country) {
  console.log(country);
});

//arrow function
countries.forEach((val) => console.log(val));

//Pass function to forEach
function printCountry(country) {
  console.log(country.toUpperCase());
}
countries.forEach(printCountry);

/*-----------------*/

// forEach with all three parameters - item, index and array
countries.forEach((country, index, arr) => {
  console.log(`${index} :: ${country} => ${arr}`);
});
countries.forEach((country, index) => {
  console.log(`${index} => ${country}`);
});

/*-----------------*/

//Array containing objects
const countriesData = [
  { country: 'India', capital: 'New Delhi' },
  { country: 'USA', capital: 'Washington, D.C.' },
  { country: 'Germany', capital: 'Berlin' },
  { country: 'France', capital: 'Paris' },
  { country: 'Italy', capital: 'Rome' },
  { country: 'Spain', capital: 'Madrid' },
  { country: 'Russia', capital: 'Moscow' },
  { country: 'Canada', capital: 'Ottawa' },
];
countriesData.forEach((item) => {
  console.log(`${item.country} => ${item.capital}`);
});
