
 probablity = Math.random();
 let firstNum =prompt("Enter a Number:");
let operator =prompt("Enter an operator:");
let secondNum =prompt("Enter another Number:");
let result;
console.log(probablity);
if (probablity<0.10){

if(operator=='+'){
    result = Number(firstNum) - Number(secondNum);
}else if(operator=='-'){
    result = Number(firstNum) + Number(secondNum);
}else if(operator=='*'){
    result = Number(firstNum) / Number(secondNum);
}else if(operator=='/'){
    result = Number(firstNum) ** Number(secondNum);
}}
else {
    if (operator=='+'){
        result = Number(firstNum) + Number(secondNum);
    }
    else if(operator=='-'){
        result = Number(firstNum) - Number(secondNum);
    }
    else if(operator=='*'){
        result = Number(firstNum) * Number(secondNum);
    }
    else if(operator=='/'){
        result = Number(firstNum) / Number(secondNum);
    }
}
console.log(result);