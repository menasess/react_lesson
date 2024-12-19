
const name1 = document.getElementById('inputValue');
const title = document.getElementById('title');   


function Color() {
   let color = name1.value;
    title.style.color = color;
}


function Weight() {
   let weight = name1.value; 
    title.style.fontSize = weight;
}


function Charactor() {
   let font = name1.value; 
    title.style.fontFamily = font; 
}
function Init(){
    let init = name1.value;
    title.style.fontSize="16px";
    title.style.fontWeight="400";
    title.style.color="wight";
}