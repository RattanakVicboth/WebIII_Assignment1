// (1) Using a built-in asynchronous function (fetch)
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  
// (2) Converting functions into Promise and Async/Await styles
  
// Callback-style function
  function delayCallback(callback) {
    setTimeout(() => {
      callback(null, 'Delayed message with callback');
    }, 1000);
  }
  
  delayCallback((error, message) => {
    if (error) {
      console.error('Callback Error:', error);
    } else {
      console.log('Callback:', message);
    }
  });
  
// Promise-based function
  function delayPromise(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Delayed message with Promise');
      }, ms);
    });
  }
  
  delayPromise(1000)
    .then((message) => {
      console.log('Promise:', message);
    })
    .catch((error) => {
      console.error('Promise Error:', error);
    });
  
// Async/Await style using delayPromise
  async function asyncDelayExample() {
    try {
      const message = await delayPromise(1000);
      console.log('Async/Await:', message);
    } catch (error) {
      console.error('Async/Await Error:', error);
    }
  }
  
  asyncDelayExample();
  
// Demonstration of error handling with then/catch vs async/await
  function someAsyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Result from someAsyncOperation");
        // Or simulate an error:
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
// Using then/catch chaining
  someAsyncOperation()
    .then(result => {
      console.log('Then/Catch - Received:', result);
      return "Chained result";
    })
    .then(chainedResult => {
      console.log('Then/Catch - Chained:', chainedResult);
    })
    .catch(error => {
      console.error('Then/Catch - Error:', error);
    });
  
// Using async/await with try/catch
  async function asyncFunctionExample() {
    try {
      const result = await someAsyncOperation();
      console.log('Async/Await - Received:', result);
    } catch (error) {
      console.error('Async/Await - Error:', error);
    }
  }
  
  asyncFunctionExample();