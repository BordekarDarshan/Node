//[Method 1]

/* console.log("First");
async(
  setTimeout(() => {
    console.log("Second");
    console.log("Third")
  }, 2000)
);
function async(callback) {
  callback;
} */

// [Method 2]

/* console.log("First");
asyncCallBack(arg => {
  console.log(arg);
});

console.log("third");

function asyncCallBack(callback) {
  setTimeout(() => {
    callback("Second");
  }, 3000);
} */

//CallBack Hell

/* console.log("First");
CH(parameterOfCallBack => {
  console.log(parameterOfCallBack);
  CH2(parameterOfCallBack, next => {
    console.log(`previous ${parameterOfCallBack} next is ${next}`);
  });
});

function CH(callback) {
  setTimeout(() => {
    callback("Second");
  }, 2000);
}

function CH2(prev, callback) {
  setTimeout(() => {
    callback("third");
  }, 2000);
} */

console.log("Please Wait.....");

infoUser(parameterUserName => {
  console.log(`Welcome ${parameterUserName}`);
  cred(parameterUserName, password => {
    console.log(`Hey ${parameterUserName} Your Password is ${password}`);
  });
});

function infoUser(callBack) {
  setTimeout(() => {
    callBack("Darshan");
  }, 3000);
}

function cred(name, callBack) {
  setTimeout(() => {
    callBack(1234);
  }, 4000);
}
