// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr){
    for (const el of arr) {
if(el===7){
    console.log("Boom!")
    return;
}
}
console.log("There is no 7 in the array!");
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);