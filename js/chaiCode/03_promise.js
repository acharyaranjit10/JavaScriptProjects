const promise = new Promise((resolve,reject)=>{
setTimeout(()=>{
    let err = false;
console.log("promise ho yo");
if(!err){
    resolve({username:'ram', age:24});
}else{
    reject();
}

},1000)
})
promise.then((user)=>{
console.log(user);
return user.username;
}).then((name)=>{
    console.log(name);
})
.catch(()=>{
    console.log("error aayecha");
}).finally(()=>{
    console.log("sakyo");
})