// Create a function which returns the number of true values there are in an arrayCreate a function which returns the number of true values there are in an array

function checkTrue(arr){
    let count=0;
    for (const item in arr) {
       if(arr[item]==true){
        count++;
       }
    }
    console.log(count);
    }
checkTrue([true,true,false,false,true]);