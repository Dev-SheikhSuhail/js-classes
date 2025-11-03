// Promises -> A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a placeholder for a value that will be available in the future.

const items = ['Mobile', 'Books', 'Pens', 'Toys'];

// placeOrder(items, fuction (){
// proceedPayment(productID);
// });

// const promise = placeOrder(items);
// Start -> {undefined}
/// Promise Object -> {data: itemDetails}
// Attaching a callback function to the Promise Object
// promise.then(function (productID) {
//   proceedPayment(productID);
// });

// const API_DATA = 'https://jsonplaceholder.typicode.com/todos';
// const result = fetch(API_DATA);
// console.log(result);

// result.then((data) => {
//   console.log(data.json());
// });
//*********************

// placeOrder -> orderId -> Payment - PaymentInfo -> OrderSummary -Details - AccountUpdate
placeOrder(items, function (orderId) {
  proceedPayment(orderId, function (paymentInfo) {
    orderSum(paymentInfo, function (details) {
      accUpdate(details);
    });
  });
});

placeOrder(items)
  .then((orderId) => proceedPayment(orderId))
  .then((paymentInfo) => orderSum(paymentInfo))
  .then((details) => accUpdate(details));

// Promise Object -> {data: itemDetails}
// promise.then(function (productID) {});

//*****************
// Promises -> A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a placeholder for a value that will be available in the future.

// const items = ['Mobile', 'Books', 'Pens', 'Toys'];

// placeOrder(items, fuction (){
// proceedPayment(productID);
// });

// const promise = placeOrder(items);
// Start -> {}
/// Promise Object -> {data: itemDetails}
// Attaching a callback function to the Promise Object
// promise.then(function (productID) {
//   proceedPayment(productID);
// });

// const API_DATA = "https://jsonplaceholder.typicode.com/todos";

// const result = fetch(API_DATA);
// console.log(result);
// result.then((data) => {
//   console.log(data.json());
// });

const promise = placeOrder(items);

promise
  // Success
  .then(function (productID) {
    // proceedPayment(productID);
    console.log(productID);
  })
  .catch((er) => {
    console.log(er.message);
  });

//*********************
// Creating Promises
function placeOrder(items) {
  const pmr = new Promise(function (resolve, reject) {
    // Logic here to handle promise

    if (!validateItems(items)) {
      const er = new Error('Items are not valid');
      reject(er);
    }

    const orderID = '2341';
    if (orderID) {
      resolve(`Order with ${orderID} Resolved.`);
    }

    // if (orderID) {
    //   setTimeout(() => {
    //     resolve(`Order with ${orderID} Resolved.`);
    //   }, 4000);
    // }
  });
  return pmr;
}

function validateItems(items) {
  // return true;
  return false;
}

//*********************
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, network calls, etc
  setTimeout(function () {
    console.log('Task is compeleted');
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log('Promise consumed/used');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Task resolved');
});

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Sahil', password: '123' });
    } else {
      reject('Error: Something went wrong');
    }
  }, 2000);
});

promise1
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log(
      'The promise is either resolved or rejected. It will be executed in both cases'
    )
  );

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Zeeshan', password: '12345' });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});
