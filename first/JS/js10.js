// const sana = {name:"사나",age:23, address:"경기"};
// const momo = {name:"모모",age:27, address:"서울"};
// const dahyeon = {name:"다현",age:28, address:"서울"};
// const nayeon = {name:"나연",age:23, address:"인천"};

// const twice = [sana,momo,nayeon,dahyeon];

// console.log("twice = ",twice);
// for(let member of twice){
//     if(member.address === "서울"){
//         document.write("이름 = ",member.name,"<br>");
//         document.write("개인정보 : ", JSON.stringify(member),"<br>");

//     }
// }

// const schedule = [
//     {todo:"수업",time:"09:00"},
//     {todo:"과제",time:"11:00"},
//     {todo:"점심",time:"12:30"},
//     {todo:"회의",time:"14:00"},
//     {todo:"조사",time:"16:00"},
// ];
// const ka = document.createElement("h1");
// document.body.appendChild(ka);
// ka.innerHTML="그냥 만들어 보자!";

// const h3_tiile1 = document.createElement("h3");
// document.body.appendChild(h3_tiile1);
// h3_tiile1.innerHTML="2개의 배열값으로 테이블 만들기";

// const table1 = document.createElement("table");
// const tr1 = document.createElement("tr");
// table1.innerHTML = `<th>시간</th><th>할일</th>`;
// table1.appendChild(tr1);
// document.body.appendChild(table1);

// for(let i=0;  i<schedule.length;i++){
//     let tr = document.createElement("tr");
//     tr.innerHTML=`<td>${schedule[i].time}</td><td>${schedule[i].todo}</td>`;
//     table1.appendChild(tr);
// }

let topPos = 50;    
let leftPos = 50;  
let boxHeight = 100; 
let boxWidth = 100;  

const box = document.getElementById("boxs");


function up() {
    boxHeight += 100;
    box.style.height = boxHeight + "px";
}

function down() {
    if (boxHeight > 50) {
        boxHeight -= 100; 
        box.style.height = boxHeight + "px";
    }
}

function left() {
    if (boxWidth > 100) {
        boxWidth -= 100; 
        box.style.width = boxWidth + "px";
    }
}

function right() {
    boxWidth += 100; 
    box.style.width = boxWidth + "px";
}

function moveUp() {
    topPos -= 10; 
    box.style.top = topPos + "%";
}

function moveDown() {
    topPos += 10; 
    box.style.top = topPos + "%";
}

function moveLeft() {
    leftPos -= 10; 
    box.style.left = leftPos + "%";
}

function moveRight() {
    leftPos += 10;
    box.style.left = leftPos + "%";
}
