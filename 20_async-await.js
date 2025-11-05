function myFun() {
  console.log('Async Await in JS');
}
myFun();

function apiData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Administrative Data');
      res('Successfully Resolved');
    }, 3000);
  });
}

async function getData() {
  console.log('Loading First API Call-1.....');
  await apiData(10);
  console.log('Loading First API Call-2.....');
  await apiData(15);
  console.log('Loading First API Call-3.....');
  await apiData(18);
  await apiData(20);
  await apiData(23);
}
// Using IIFE - Will be called immediately as it is defined.
// To avoid extra function call.
(async () => {
  console.log('Loading First API Call-1.....');
  await apiData(10);
  console.log('Loading First API Call-2.....');
  await apiData(15);
  console.log('Loading First API Call-3.....');
  await apiData(18);
  await apiData(20);
  await apiData(23);
})();
