const myObj = {
  1: 101,
  firstName: 'Aaqib',
  isLoggedIn: true,
  subjects: ['Eng', 'Math'],
  email: 'aaqib123@gmail.com',
};

// console.log(myObj.firstName);
// console.log(myObj['firstName']);
console.log(myObj);
myObj.email = 'aaqib321@gmail.com';
console.log(myObj);
Object.freeze(myObj);
myObj.email = 'aaqib333@gmail.com';
console.log(myObj);

//More on Objects
const obj1 = {
  id: 1,
  name: 'Sahil',
  age: 26,
};
const obj2 = {
  course: 'Data Science',
  isEnrolled: false,
  dob: 2020,
};
const obj3 = {
  address: 'Pulwama',
};

// const newObj = { obj1, obj2, obj3 };

// const newObj = Object.assign(obj1, obj2, obj3);

// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(newObj);

// const newObj = { ...obj1, ...obj2, ...obj3 };

// console.log(newObj);

const students = [
  {
    id: 1,
    name: 'Suhail',
    age: 25,
    course: 'Computer Science',
    isEnrolled: true,
    dob: 2000,
  },
  {
    id: 2,
    name: 'Ayaan',
    age: 22,
    course: 'Information Technology',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    name: 'Hafsa',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    name: 'Abdullah',
    age: 23,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    name: 'Arsalan',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
  {
    id: 2,
    name: 'Bilal',
    age: 27,
    course: 'Artificial Intelligence',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    name: 'Zainab',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    name: 'Abdullah',
    age: 15,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    name: 'Sahil',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
];

// console.log(students[1].course);

// console.log(Object.keys(students[0]));
// console.log(Object.values(students[0]));
// console.log(Object.entries(students[0]));
// console.log(students[1].hasOwnProperty('age'));

const student = {
  id: 4,
  name: 'Abdullah',
  age: 15,
  courseName: 'Artificial Intelligence',
  isEnrolled: true,
  dob: 2015,
  courseInstructor: 'Sahil',
};

// let stCourse = student.courseName;

// console.log(student.courseName, student.courseInstructor);

// Object Destructuring
// const { courseName, courseInstructor, age } = student;
// console.log(courseName, courseInstructor, age);

// Renaming/Aliasing Variables(Keys)
const { courseName: cN, courseInstructor: cI, age: a } = student;
console.log(cN, '->', cI, '->>', a);
