
const promiseexecutor = (resolve,reject) =>
{
        resolve('I FIRED');
        reject(new Error( 'I DID NOT FIRE'));
}

const promise = new Promise(promiseexecutor);

const handlesucess = (resolvedvalue) =>
{
    console.log(resolvedvalue);
}
const onRejected = (error) =>
{
	console.log(error);
}

promise.then(handlesucess,onRejected)