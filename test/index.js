function sum (a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

function indexOfFirstNegative(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return i;
    }
}

function newArray(n){
    let arr = [];
    for (let i = 1; i <= n; i++){
       arr.push(i);
    }
    return arr;
}


module.exports = {sum, mult, indexOfFirstNegative, newArray};