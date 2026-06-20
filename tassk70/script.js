

console.log("hello world");
let colobj = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
    5: "purple"
}
document.querySelectorAll(".box").forEach((element) => {
let rand = Math.floor(Math.random() * 5 + 1);

    element.style.backgroundColor = colobj[rand];
});