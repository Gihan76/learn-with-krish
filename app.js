let numberSeq = [21,25,29,28,22,24,27,26,30];

// make the array into ascending order array
const ascNumSeq = numberSeq.sort(function(a,b){
    return a - b;
});
// console.log(ascNumSeq);

function missingNumber(arr) {
    const startNum = arr[0];
    const endNum = arr[arr.length - 1];
    
    for(var i = startNum; i <= endNum; i++){
        if(arr.indexOf(i) == -1){
            console.log("Missing Number is : "+i)
        }
    }
}

missingNumber(ascNumSeq);