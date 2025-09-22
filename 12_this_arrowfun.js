const user = {
  username: 'Sahil',
  score: 299,

  message: function () {
    console.log(`${this.username} , Welcome Here`);
    // console.log(this);
  },
};

user.message();
// user.username = "Zeshan"
// user.message()

// console.log(this);

// function myFun(){
//     let username = "Sahil"
//     console.log(this.username);
// }

// myFun()

// const fun2 = function () {
//     let username = "Zeshan"
//     console.log(this.username);
// }

// const fun2 = () => {
//   let username = 'Sahil';
//   console.log(this);
// };

// fun2();

// const addNums = (num1, num2) => {
//     return num1 + num2
// }

// const addNums = (num1, num2) =>  num1 + num2

// const addNums = (num1, num2) => ( num1 + num2 )

// const addNums = (num1, num2) => ({ username: 'Abdullah' });

// console.log(addNums(3, 4));
