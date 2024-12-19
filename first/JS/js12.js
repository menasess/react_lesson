document.getElementById("container").addEventListener("click",function(e){
  alert(`${e.target.tagName} 태그가 클릭`)
});

document.getElementById("ball").addEventListener("click",function(e){
   e.stopPropagation();
  //  alert(`${e.target.tagName} 태그가 클릭`)
   if(e.target.tagName==="SPAN"){
    e.target.innerHTML = "👀";
   }
});

const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("demo").innerHTML=fruits.sort();
document.getElementById("demo1").innerHTML=fruits.reverse();

const num = [10,2,3,4,5,6,7];
document.getElementById("demo2").innerHTML=num.toString();
document.getElementById("demo3").innerHTML=num.toReversed();

