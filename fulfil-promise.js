'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      
        setTimeout(( ) => {fulfill('FULFILLED!')}, 300);
      // Your solution here
    });
    const handleSuccess = (resolvedValue) => {
          console.log(resolvedValue);
    };

      promise.then(handleSuccess); 
    // Your solution here
  
  /*

    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.
    
      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });
     promise.then(console.log);

    
*/