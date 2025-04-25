// async function one(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    let data = await x.json();
//    return data;
// }
// async function main(){
// let val = 45;
// newVal= await one();
// console.log(newVal);
// }
// main()

function pro(x){
     return new Promise((resolve, reject)=>{
        resolve(45);
    })
}
let op =pro(45);
op.then((red)=>{
    console.log(red);
})
x=pro(5);
console.log(x);