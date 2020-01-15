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

function isNaN(n){
    return n !== n;
}

function maxArr(arr){
    if (arr.length === 0) return -Infinity;
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]> max) max = arr[i];
    }
    return max;
}

function password(str){
    return str.length <=15 && str.length >= 3 && str.match(/[0-9a-zA-Z]/g).length === str.length;
}
module.exports = {sum, mult, indexOfFirstNegative, newArray, isAdult, firstWord, isNaN, maxArr, password};