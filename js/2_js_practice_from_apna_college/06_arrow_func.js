// let a = parseInt(prompt("enter a"));
// let b = parseInt(prompt("enter b"));
// const calc=(a,b)=>{
//     console.log(`sum = ${a+b}`);
//     console.log(`diff = ${a-b}`);
//     console.log(`mul = ${a*b}`);
//     console.log(`div = ${a/b}`);
//     console.log(`mod = ${a%b}`);
// }
// calc(a,b);




// let count =0;
// function func(string){
    //     for (let i of string) {
        //         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            //             count++;
            //         }
            
            //     }
            //     console.log(count);
            // }
            
            // func();
            
            
            let count =0;
const arr=(str)=>{
    for (let i of str) {
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++;
        }

    }
    console.log(count);
}
arr("Ranjit Acharya");