// let marks = [88,87,90,94,65,99,55,67,65,97];
// let newarr = marks.filter((value)=>{
//  return value > 90;
// })
// console.log(newarr);

let n = 5;
let newarr=[];
for (let i = 1; i<= n; i++) {
    newarr[i-1]=i;
    
    }
console.log(newarr);
let red1 = newarr.reduce((pre,post)=>{
    return pre+post;
});
console.log(red1);