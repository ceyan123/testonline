// const express = require("express");

// const app = express()


let i;
let j;

let n = 5

function segitiga(n) {
    let result = "";
    for (i=0; i<n; i++ ){
        for (j= 0; j<=i; j++){
            result += "*";
        }
        result += '\n';
    }
    return result;
}

function segitiga2(n){
    let result = "";
    for (i=0; i<n-1; i++){
        for (j=n; j>i; j--){
            result += '*';
        }
        result += '\n';
    }
    return result;
}
let x = 5
console.log(segitiga(x));
console.log(segitiga2(x));
