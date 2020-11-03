let promise1 = new Promise((resolve, reject) => {
  resolve("we will discuss typescript with reactjs");
});
promise1.then(
  (posRes) => {
    console.log(posRes);
  },
  (errRes) => {
    console.log(errRes);
  }
); //we will discuss typescript with reactjs

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 5000);
});

promise.then(
  (posRes) => {
    console.log(posRes);
  },
  (errRes) => {
    console.log(errRes);
  }
); //Hello

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success...1");
  }, 0);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success....2");
  }, 5000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success....3");
  }, 10000);
});

promise1.then(
  (posRes) => {
    console.log(posRes);
  },
  (errRes) => {
    console.log(errRes);
  }
);

promise2.then(
  (posRes) => {
    console.log(posRes);
  },
  (errRes) => {
    console.log(errRes);
  }
);

promise3.then(
  (posRes) => {
    console.log(posRes);
  },
  (errRes) => {
    console.log(errRes);
  }
);
