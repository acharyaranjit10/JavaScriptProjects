// let fact=1;
// for (let index = n; index > 0; index--) {
    //    fact=fact*index;
    
    // }
    // alert(fact);
    let n=parseInt(prompt("enter a number"));
    let fact=[];
for(let i=1;i<=n;i++){
    fact.push(i);
}
const facto=(a,b)=>(a*b);

let final=fact.reduce(facto,1);
alert(final);

// let n = parseInt(prompt("Enter a number")); // Get a number from the user

// // Populate the fact array with numbers from 1 to n
// let fact = [];
// for (let i = 1; i <= n; i++) {
//     fact.push(i);
// }

// // Define a function to multiply two numbers
// const facto = (a, b) => a * b;

// // Use reduce to calculate factorial
// let final = fact.reduce(facto, 1); // Start with an initial value of 1

// alert("The factorial of " + n + " is: " + final); // Alert the result
