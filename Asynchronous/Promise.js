//[Basic Promise Syntax]
/* console.log("First");

let promise = new Promise((resolve, reject) => {
  resolve("Hello");
  reject("Error");
});

promise.then(data => {
  console.log(data);
}) */

//[Promise]

function initialize(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Welcome ${name}`);
    }, 3000);
  });
}

function cred(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hey ${name} Your Password is ${password}`);
    }, 3000);
  });
}

initialize("Darshan").then(arg => {
  console.log(arg);
  cred(arg, 1234).then(log => console.log(log));
});
