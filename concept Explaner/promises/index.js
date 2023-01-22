let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)
  setTimeout(() => {// when successful
    1 == 2 ? myResolve("ok") : myReject("error");
  }, 2000);

  
  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
console.log(myPromise);

myPromise
  .then(function (value) {
    console.log(myPromise);
    /* code if successful */ console.log(value);
  })
  .catch(function (error) {
    console.log(myPromise);
    /* code if some error */ console.log(error);
  });
