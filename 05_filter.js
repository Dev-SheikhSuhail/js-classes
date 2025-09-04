const arr = [12, 15, 18, 22, 24, 27, 32, 9, 25, 70, 3];

console.log(arr);

let res = arr.filter((num) => num > 20);
console.log(res);

let res2 = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(res2);

const students = [
  {
    id: 1,
    'full name': 'Suhail',
    age: 25,
    course: 'Computer Science',
    isEnrolled: true,
    dob: 2000,
  },
  {
    id: 2,
    'full name': 'Ayaan',
    age: 22,
    course: 'Information Technology',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    'full name': 'Hafsa',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    'full name': 'Abdullah',
    age: 23,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    'full name': 'Arsalan',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
  {
    id: 2,
    'full name': 'Bilal',
    age: 27,
    course: 'Artificial Intelligence',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    'full name': 'Zainab',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    'full name': 'Abdullah',
    age: 15,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    'full name': 'Sahil',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
];
// console.log(students);

// let resultArr = students.filter(
//   (student) => student.course === 'Artificial Intelligence'
// );
// console.log(resultArr);

let resultArr = students.filter(
  (student) => student.course === 'Artificial Intelligence' && student.age > 20
);
console.log(resultArr);
