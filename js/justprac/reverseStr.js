// Write a function that takes a string input and returns the string in a reversed case and order.

// Examples
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

function revStr(str){
    let newStr = str.split('').reverse(); // Reverse the string
    for (let i = 0; i < newStr.length; i++) {
        let el = newStr[i];
        // If the character is a letter, switch case
        if (/[a-zA-Z]/.test(el)) {
            // Change the case
            if (el === el.toLowerCase()) {
                newStr[i] = el.toUpperCase(); // Convert lowercase to uppercase
            } else {
                newStr[i] = el.toLowerCase(); // Convert uppercase to lowercase
            }
        }
    }
    // Join the array back into a string and print
    let finalStr = newStr.join('');
    console.log(finalStr); 
}

revStr("step on NO PETS");
