// map(), filter() & reduce()

const students = [
  {
    id: 1,
    fullname: 'Suhail',
    age: 25,
    course: 'Computer Science',
    isEnrolled: true,
    dob: 2000,
  },
  {
    id: 2,
    fullname: 'Ayaan',
    age: 22,
    course: 'Information Technology',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    fullname: 'Hafsa',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    fullname: 'Abdullah',
    age: 23,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    fullname: 'Arsalan',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
  {
    id: 2,
    fullname: 'Bilal',
    age: 27,
    course: 'Artificial Intelligence',
    isEnrolled: false,
    dob: 2005,
  },
  {
    id: 3,
    fullname: 'Zainab',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
    dob: 2010,
  },
  {
    id: 4,
    fullname: 'Abdullah',
    age: 15,
    course: 'Artificial Intelligence',
    isEnrolled: true,
    dob: 2015,
  },
  {
    id: 5,
    fullname: 'Sahil',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
    dob: 2020,
  },
];

const output = students
  .filter((student) => student.dob < 2015)
  .map((student) => `${student.fullname} :: ${student.course}`);
console.log(output);
