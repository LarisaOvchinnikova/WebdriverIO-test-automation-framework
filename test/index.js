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

function isAdult(age){
    return age >= 18;
}

function firstWord(str){
    str = str.trim();
    let ind = str.indexOf(' ');
    if (ind === -1) return (str);
    else return str.slice(0,ind);
}

module.exports = {sum, mult, indexOfFirstNegative, newArray, isAdult, firstWord};