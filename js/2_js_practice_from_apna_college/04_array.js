// let heroes = ["ironMan", "Hulk", "captainAmerica"];
// let villians = ["Thanos","loki","wanda"];
// let marks = [12,13,15,17];
// let info = ["ram",16,"mulpani"];
// let count = heroes.length;
// for (let i of heroes) {
//     console.log(i);
// }
// let obj={
//     name:"ram",
//     roll:12
// };
// for (const iterator in obj) {
//     console.log(iterator, obj[iterator]);
// }

// let marks=[11,23,45,67,89];
// let sum=0;
// for(let i of marks){
// sum=sum+i;
// }
// console.log(`average = ${sum/marks.length}`);

// let items=[250,645,300,900,50];
// let val;
// for(let i =0;i<items.length;i++){
// val=items[i]-(items[i]/10);
// items[i]=val;
// }
// console.log(items);


let companies =["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"];
console.log(companies);
companies.splice(0,1);
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

