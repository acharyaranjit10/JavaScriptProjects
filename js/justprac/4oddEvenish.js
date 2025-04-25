// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

function oddEvenish(num){
    let sum=0;
    let str = num.toString();
    for (const ind in str) {
       sum=sum+parseInt(str[ind]); 
        }
        if(sum%2===0){
            console.log( num + " is Evenish");
        }
        else{
            console.log( num + " is Oddish");

        }
        
    }







oddEvenish(7);
oddEvenish(20);
oddEvenish(120);
oddEvenish(4433);
