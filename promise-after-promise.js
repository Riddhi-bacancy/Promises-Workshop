first()
.then((resolved) => {
	return second(resolved);
})
.then((resolved2) =>{
	console.log(resolved2);=
})