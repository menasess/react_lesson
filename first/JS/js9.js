// const twice = ["sana","momo","nayeon","dahyeon"];
// const ul_en = document.getElementById("en");

// let result = " ";
// for(let temp of twice){
//     result = `<li>${temp}</li>`;
//      console.log(result)
    
// }

// ul_en.innerHTML = result;
// const parent = document.createElement("ul");
// parent.id = "ko";

// let child = document.createElement("li");
// child.innerHTML = "사나";
// parent.appendChild(child);


// child = document.createElement("li");
// child.innerHTML="모모";
// parent.appendChild(child);

// child = document.createElement("li");
// child.innerHTML="다현";
// parent.appendChild(child);

// document.body.appendChild(parent);

const twiceKo = ["사나","모모","다현"];
const ko2 = document.getElementById("ko2");

let result1 = " ";
for(let arr of twiceKo){
    result1 = `<li>${arr}</li>`;
    let child = document.createElement("li");
    child.innerHTML= arr;
    parent.appendChild();
     console.log(result1)
}
document.body.appendChild(result1);
