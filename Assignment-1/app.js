// let numberSeq = [21,25,29,28,22,24,27,26,30];
let numberSeq = [21,25,29,28,22,24,27,26,30];

// make the array into ascending order array
const ascNumSeq = numberSeq.sort(function(a,b){
    return a - b;
});
// console.log(ascNumSeq);

// function missingNumber(arr) {
//     const startNum = arr[0];
//     const endNum = arr[arr.length - 1];
    
//     for(var i = startNum; i <= endNum; i++){
//         if(arr.indexOf(i) == -1){
//             console.log("Missing Number is : "+i)
//         }
//     }
// }

// missingNumber(ascNumSeq);

for (var i = 0; i < ascNumSeq.length - 1; i++) {
    var startNum = ascNumSeq[i];
    var nextNum = ascNumSeq[i+1];
    
    if(startNum +1 != nextNum){
        console.log(startNum + 1);
        break;
    }else if((startNum +1 == nextNum) && (i==ascNumSeq.length-2)){
        console.log(nextNum + 1);
    }
}