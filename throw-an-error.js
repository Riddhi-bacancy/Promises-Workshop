function parsePromised(){
return new Promise(function(resolved,reject){
try{
resolved(JSON.parse(process.argv[2]));
}
catch(e){
reject(e);
}
});
}
parsePromised().then(console.log,function(e){console.log(e.message);});