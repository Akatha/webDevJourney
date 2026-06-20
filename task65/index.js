
function fact (n){
    if (n === 0) {
        return 1;
    }else{
        return n * fact(n-1);
    }
}

console.log(fact(5));



let a = 5;
let result = 1;   // start with 1 because factorial multiplies numbers

for (let i = a; i > 0; i--) {
    result = result * i;
}

console.log(result); // 120
