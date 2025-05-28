function generateTicket(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sumOfArr(arr){
    let sum = arr.reduce((prev,curr,index,arr)=> prev+curr ,0)
    return sum;
}
export {generateTicket ,sumOfArr};