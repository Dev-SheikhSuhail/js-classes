//  A callback is a function that is passed as an argument to another function and is executed after some operation has been completed or at a specific point during the execution of that function.
// Without callbacks, JavaScript would be synchronous and blocking, meaning that each operation would have to complete before the next one could begin, freezing the entire application until the operation is finished.

// Function that accepts a callback
function doSomething(callbackFun) {
  // Do some work
  console.log('Doing something...');
  // Call the callback function
  callbackFun();
}
// Callback function
function myCallback() {
  console.log('Callback executed!');
}

// Passing callback as an argument
doSomething(myCallback);

// ****************************************************************
// Synchronous Code(Blocking)
console.log('Hello');
console.log('Welcome to Programming World');
console.log('Python');

// Asynchronous Code(Non-Blocking) -> Callbacks allow JavaScript to be asynchronous and non-blocking.

console.log('Hello');
setTimeout(() => {
  console.log('JS');
}, 2000);
console.log('Python');

// Problem with Callbacks ->
//                          Callback Hell(Pyramid of Doom)
//                          Inversion of Control

// Callback Hell -> Nested callbacks stacked below one another forming a pyramid-like structure, making the code hard to read and maintain.
// Unreadable & Unmaintainable Code.

// Example of Callback Hell(Pyramid of Doom)
function fetchData(userID, nextID) {
  setTimeout(() => {
    console.log('Fetched User ID:', userID);
    if (nextID) {
      nextID();
    }
  }, 2000);
}
fetchData(10, () => {
  console.log('Loading Next User...');
  fetchData(15, () => {
    console.log('Loading Next User.....');
    fetchData(17, () => {
      console.log('Loading Next User........');
      fetchData(19, () => {
        console.log('Loading Next User........');
        fetchData(21, () => {
          fetchData(22);
        });
      });
    });
  });
});

// fetchData(10) -> fetchData(15) -> fetchData(17) -> ...

// Another Example of Callback Hell
setTimeout(function () {
  console.log('Step 1 complete');

  setTimeout(function () {
    console.log('Step 2 complete');

    setTimeout(function () {
      console.log('Step 3 complete');

      setTimeout(function () {
        console.log('Step 4 complete');

        setTimeout(function () {
          console.log('Step 5 complete');
          // This keeps going deeper and deeper...
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);

// Sequential API calls
function apiCall1(callback) {
  setTimeout(() => {
    console.log('API Call 1 complete');
    callback();
  }, 1000);
}

function apiCall2(callback) {
  setTimeout(() => {
    console.log('API Call 2 complete');
    callback();
  }, 1000);
}

function apiCall3(callback) {
  setTimeout(() => {
    console.log('API Call 3 complete');
    callback();
  }, 1000);
}

// Using the API calls
apiCall1(() => {
  console.log('Calling 1');
  apiCall2(() => {
    console.log('Calling 2');
    apiCall3(() => {
      console.log('All API calls complete');
    });
  });
});

// Inversion of Control -> Giving control of our code execution to another function(third-party library or function), which can lead to unexpected behavior and makes it harder to reason about the code flow.
// We trust the callback will be called correctly
// What if this function:
// - Calls callback multiple times?
// - Never calls callback?
// - Calls callback with wrong arguments?
// - Calls callback too early or too late?

// Example of Inversion of Control
function purchaseItem(itemId, callback) {
  thirdPartyAPI.processPayment(itemId, callback);
}

purchaseItem(123, function (error) {
if (!error) {
chargeCustomer(); // What if this runs multiple times?
sendConfirmationEmail();
updateInventory();
}
});
// Here, we have no control over how thirdPartyAPI.processPayment behaves, leading to potential issues in our code.
