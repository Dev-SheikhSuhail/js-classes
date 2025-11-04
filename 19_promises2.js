const items = ['Mobile', 'Books', 'Pens', 'Toys'];

// Creating Promises
function placeOrder(items) {
  const pmr = new Promise(function (resolve, reject) {
    // Logic here to handle promise
    if (!validateItems(items)) {
      const er = new Error('Items in the cart are not valid');
      reject(er);
    }
    const orderID = '23415';
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
  return true;
  // return false;
}

const promiseTwo = placeOrder(items);
// Consuming Promises - Handling Success and Failure cases
promiseTwo
  // Success(Resolved Case)
  .then(function (productID) {
    console.log(productID);
  })
  // Failure(Rejection Case) -> Caught error here
  .catch((er) => {
    console.log(er.message);
  })
  // Optional - Executed in any case.
  .finally(() =>
    console.log('Promise is Settled; either Resolved or Rejected.')
  );

//*********************
function placeOrders(items) {
  const pmr2 = new Promise(function (resolve, reject) {
    // Logic here to handle promise
    if (!validateProducts(items)) {
      const er = new Error('Products in the cart are not valid');
      reject(er);
    }
    const ordID = '234157';
    if (ordID) {
      resolve(`Order with ${ordID} Resolved.`);
    }
  });
  return pmr2;
}

function validateProducts(items) {
  return true;
  // return false;
}

function proceedPayment(Id) {
  return new Promise(function (resolve, reject) {
    resolve(`Payment Successful for the Order ID: ${Id}`);
  });
}

function orderSum(Id) {
  return new Promise(function (resolve, reject) {
    resolve(`Here is the Summary for the Order with ID: ${Id}`);
  });
}
// Multiple then() and catch()
// If there are multiple then() methods, and an error occurs in any of them, the control goes to the nearest catch() method.
// placeOrder -> orderId -> Payment - PaymentInfo -> OrderSummary - Details -> AccountUpdate
placeOrders(items)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    return orderSum(paymentInfo);
  })
  .catch((er) => {
    console.log(er.message);
  })
  .then(function (details) {
    return accUpdate(details);
  })
  .then(function (orderId) {
    console.log('It will be definitely executed...');
  });
// .catch((er) => {
//   console.log(er.message);
// });

//******************
const API_DATA = 'https://jsonplaceholder.typicode.com/todos';

const result = fetch(API_DATA);
// console.log(result);
result.then((data) => {
  console.log(data.json());
});

// Error
const FETCH_DATA = 'https://sonplaceholder.typicode.com/todos';
const reponse = fetch(FETCH_DATA);
// console.log(reponse);
reponse
  .then((data) => {
    console.log(data.json());
  })
  .catch((err) => console.log(err));
