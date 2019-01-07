
const promiseexecutor = (resolve,reject) => {
	resolve('PROMISE VALUE');
}

const promise = new Promise(promiseexecutor);



const handlesucess = (resolvedvalue) => {
      
}
promise.then(handlesucess)
console.log("MAIN PROGRAM")
