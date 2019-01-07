  var promise = new Promise(function (fulfill, reject) {
      fulfill('SECRET VALUE');
      reject(new Error('SECRET VALUE'));
    });

  var promise = Promise.resolve('SECRET VALUE');
  const onRejected = (error) =>
  {
  	        console.log(error.message);
  }
  
  promise.catch(onRejected);
