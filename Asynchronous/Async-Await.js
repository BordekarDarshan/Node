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

async function getDataWithAsyncAwait() {
  let dataIntialize = await initialize("darshan");
  console.log(dataIntialize);

  let dataCred = await cred(dataIntialize, 1234);
  console.log(dataCred);
}

getDataWithAsyncAwait();
