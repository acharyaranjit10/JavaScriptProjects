function sum(a,b){
    console.log(a+b);
}
function calc(a,b,sum){
sum(a,b);
}
calc(4,5,sum);


function printData(dataId, nextData){
    setTimeout(() => {
        console.log(dataId);
        if(nextData){
            nextData();
        }
      }, "700");
}
printData("you",()=>{
    printData("are",()=>{
        printData("Gay",()=>{
            printData("😆");
        });
    });
});