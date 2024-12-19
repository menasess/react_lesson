const title = document.getElementById("title");
const color = document.getElementById("fontColor");
const fontWeight = document.getElementById("fontWeight");
const fontSize = document.getElementById("fontSize");

function changeColor(){
    title.style.color = color.value;
}
function selectWeight(){
    title.style.fontWeight = fontWeight.value;
}
function selectSize(){
    title.style.fontSize = fontSize.value+"px";
}