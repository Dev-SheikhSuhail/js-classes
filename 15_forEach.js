const skills = ['HTML', 'CSS', 'JS', 'Git', 'ReactJS', 'TailwindCSS', 'Python'];
skills.forEach((val, idx) => {
  console.log(`${idx} -> ${val}`);
});

const skills2 = [
  'HTML',
  'CSS',
  'JS',
  'Git',
  'ReactJS',
  'TailwindCSS',
  'Python',
];
const values = skills2.forEach((val) => {
  //   console.log(val.toLowerCase());
  return val.toUpperCase();
});
console.log(values);

const skills3 = [
  'HTML',
  'CSS',
  'JS',
  'Git',
  'ReactJS',
  'TailwindCSS',
  'Python',
];
const values2 = skills3.forEach((val) => {
  console.log(val);
  return val;
});
console.log(values2);

const arr = [12, 15, 18, 22, 24, 27];

const result = arr.map(function (x) {
  return x * 2;
});

console.log(result);
