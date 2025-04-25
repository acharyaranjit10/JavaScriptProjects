// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

function nestedLength(arr) {
    // let sum=arr.length;
    // let count = arr.length;
    // for (const el of arr) {
    //     if(el.length>1){
    //         sum=sum+(el.length-1);
    //     }
        
    // }
    // console.log(sum);
    let str = arr.join();
    let newStr = str.replace(/,/g,'');
    console.log(newStr.length);
    
    
}
nestedLength([[1, [2, 3]], [4, [5, [6]]]]);