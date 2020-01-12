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

module.exports = {sum, mult, indexOfFirstNegative};