// let promise = new Promise((resolve,reject)=>{
// // resolve("wah ji wah");
// reject("erroooooor");
// });

// function getData(val){
//  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("loading....",val)
//         resolve("vayo");
//     }, 2000);
// })
// }
// let a = getData(50);
// let ab= Promise.then(()=>{
//     console.log("aaich aaich");
// })
// Promise.then();



let ret = (sum) => {
    return new Promise((resolve, reject) => {
        if (sum == 2) {
            resolve("wah ji wah!");
        } else {
            reject("xya ji xya!");
        }
    });
};

let retVal = ret(5);
retVal.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
});
