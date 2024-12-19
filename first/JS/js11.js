// const sana = {name : "사나", age : "34", address : "경기"};
// document.write(sana["name"],);
// document.write("<br>")
// document.write(sana["name"],"#<br>");
// document.write("---------------------")
// document.write("<br>")
// document.write(sana["age"]);
// document.write("<br>")
// document.write(sana["age"],"#<br>");
// document.write("---------------------")
// document.write("<br>")
// document.write(sana["address"]);
// document.write("<br>")
// document.write(sana["address"],"#<br>");

// document.write("---------------------")
// document.write("<br>")
// for(let key in sana){
//     document.write(sana[key],);
//     document.write("<br>")
//     document.write(sana[key],"#<br>");
// }

// const twiceKo = ["사나","모모","다현"];
// document.write("<h4>twiceko</h4>");
// document.write(`<h4>${twiceKo}</h4>`);
// const ko2 = document.createElement("ul");

// for(let arr in twiceKo){
//     let child = document.createElement("li");
//     child.innerHTML= twiceKo[arr];
//     ko2.appendChild(child);
     
// }
// document.body.append(ko2);


// const twice = [
//     {name:"사나",age:"34",address:"경기"},
//     {name:"모모",age:"33",address:"서울"},
//     {name:"나연",age:"36",address:"인천"},
// ];
// const t1 = twice[0];
// for(let key in t1){
//         document.write(t1[key],);   
// }
// document.write("<br>")
// const t2 = twice[1];
// for(let key in t2){
//     document.write(t2[key]);
// }
// document.write("<br>")
// const t3 = twice[2];
// for(let key in t3){
//         document.write(t3[key]);   
// }
// document.write("<br>")
// for(let i=0; i<twice.length; i++){ 
//     const temp = twice[i];
//     for(let key in temp){
//     // for(let j=0; j<i.length; j++){
//         document.write(temp[key],"<br>");
//     }
//     document.write("<br>")
// }

// document.write("<br>")
// for(let temp of twice){ 
//     for(let key in temp){
//     // for(let j=0; j<i.length; j++){
//         document.write(key," : ",temp[key],"<br>");
//     }
//     document.write("<br>")
// }


// const twiceKo = ["사나","모모","다현","나연"];
//  twiceKo.forEach(function(value,index,array){
//       document.write(`<h4>${value}</h4>`);
//       document.write(`<h4>${index}</h4>`);
//       document.write(`<h4>${array}</h4>`);
//       document.write("----------------")
//  });


//  const twiceKo = ["사나","모모","다현","나연"];
//  twiceKo.forEach((value,index,array)=>{
//       document.write(`<h4>${value}</h4>`);
//       document.write(`<h4>${index}</h4>`);
//       document.write(`<h4>${array}</h4>`);
//       document.write("----------------")
//  });


//  const today = new Date();
// document.write(`현재 시간 : ${today}`);
// document.write("<br>");
// document.write(`현재 시간 : ${today.toLocaleString()}`);
// document.write("<br>");
// document.write(`현재 시간 : ${today.toLocaleDateString()}`);
// document.write("<br>");
// document.write(`현재 시간 : ${today.toUTCString()}`);
// document.write("<br>");
// document.write(`현재 시간 : ${today.getFullYear()}`);

// const today = new Date();
// let someday = new Date();

// someday.setFullYear(someday.getFullYear()+3);
// document.write(`현재 시간 : ${someday.toLocaleString()}(${someday})`);
// document.write("<br>");
// someday.setMonth(someday.getMonth()+5);
// document.write(`현재 시간 : ${today.toLocaleString()}(${someday})`);

// let date = new Date("2023-12-31");

// let to = (someday-today)/(24*60*60*1000);
// document.write("<br>");
// document.write(`시간 : ${to} 일`);
const enterDate = document.getElementById("enterDate");
const today = dateFormat(new Date());
enterDate.value = today;

enterDate.min = today;
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth()+2);
enterDate.max = dateFormat(maxDate);

function dateFormat(vdate){
    const year = vdate.getFullYear();
    const month = (vdate.getMonth()+1).toString().padStart(2,"0");
    const day = vdate.getDate().toString().padStart(2,"0");

    console.log([year,month,day].join("-"));
    return[year,month,day].join("-");
}
  function printOutDate(){
    let outDate;
    let night = document.getElementById("night").value;
    outDate = new Date(enterDate.value);
    night = Number(night);
    outDate.setDate(outDate.getDate()+night);
    document.getElementById("outDate").value=dateFormat(outDate);
    

  }





      
