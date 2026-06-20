
console.log("javascript is loading..");

let boxes = document.getElementsByClassName("box");


function getRandomColor(){
    let val1 = Math.floor(0+Math.random() * 256);
    let val2 = Math.floor(0+Math.random() * 256);
    let val3 = Math.floor(0+Math.random() * 256);
    return `rgb(${val1}, ${val2}, ${val3})`;
    
}

Array.from(boxes).forEach((element) => {
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
});