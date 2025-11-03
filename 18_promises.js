// Promises -> A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a placeholder for a value that will be available in the future.

const items = ['Mobile', 'Books', 'Pens', 'Toys'];

// Passing a callback function
// placeOrder(items, function () {
//   proceedPayment(productID);
// });

const promise = placeOrder(items);
// Start -> {undefined}
// Promise Object -> {data: itemDetails}

// Attaching a callback function to the Promise Object.
// Consuming the Promise
promise.then(function (productID) {
  console.log(productID);
});

// const API_DATA = 'https://jsonplaceholder.typicode.com/todos';
// const result = fetch(API_DATA);
// console.log(result);

// result.then((data) => {
//   console.log(data.json());
// });

//*********************

// placeOrder -> orderId -> Payment - PaymentInfo -> OrderSummary -Details - AccountUpdate

// Promise Chaining -> To avoid callback hell, we use Promise chaining. It is multiple .then() methods to handle a sequence of asynchronous operations.

const mulPromise = placeOrder(items);
mulPromise
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    return orderSum(paymentInfo);
  })
  .then(function (details) {
    return accUpdate(details);
  });

// Or using Arrow functions
// mulPromise
//   .then((orderId) => proceedPayment(orderId))
//   .then((paymentInfo) => orderSum(paymentInfo))
//   .then((details) => accUpdate(details));

//*****************

// const API_DATA = "https://jsonplaceholder.typicode.com/todos";

// const result = fetch(API_DATA);
// console.log(result);
// result.then((data) => {
//   console.log(data.json());
// });
