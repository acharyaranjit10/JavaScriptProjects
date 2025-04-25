// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]

function findBoom(arr){
    let counter = 0;
    let i=0;
   while(i<arr.length-2){
       if(arr[i]==arr[i+2] && arr[i]!=arr[i+1]){

        // console.log(arr[i]);
        // console.log(arr[i+1]);
        // console.log(arr[i+2]);
          console.log(arr[i], arr[i+1], arr[i+2]);
           counter++;
       }
i++;
   }
    console.log("total boomerangs = "+counter)
    }

    findBoom([1, 7, 1, 7, 1, 7, 1])
    findBoom([4, 4, 4, 9, 9, 9, 9])
