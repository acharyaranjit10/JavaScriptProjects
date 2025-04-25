
let a = [1,2,3,4,5,6,7];
let newa = a.map((e, index, array)=>{
    return e**2;
})
console.log(newa);

let filt = a.filter