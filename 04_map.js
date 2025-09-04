const arr = [12, 15, 18, 22, 24, 27];

// Double = [24, 30,...]

const result = arr.map((x) => x * 2);

console.log(result);

const students = [
  {
    id: 1,
    'full name': 'Suhail',
    age: 25,
    course: 'Computer Science',
    isEnrolled: true,
  },
  {
    id: 2,
    'full name': 'Ayaan',
    age: 22,
    course: 'Information Technology',
    isEnrolled: false,
  },
  {
    id: 3,
    'full name': 'Hafsa',
    age: 24,
    course: 'Software Engineering',
    isEnrolled: true,
  },
  {
    id: 4,
    'full name': 'Abdullah',
    age: 23,
    course: 'Artificial Intelligence',
    isEnrolled: true,
  },
  {
    id: 5,
    'full name': 'Arsalan',
    age: 26,
    course: 'Data Science',
    isEnrolled: false,
  },
];

//["Suhail , IT", "Hafsa , ...."]
// const stuResult = students.map(
//   (student) => `${student.name}, ${student.course}`
// );

const stuResult = students.map(
  (stu) => stu['full name'] + ' , ' + stu['course']
);

console.log(stuResult);
