// //window 객체에서 setTimeout(), setInterval() 메소드는 인자를 함수로 함니다.
// window.setTimeout(function(){
//     timeout.innerHTML = new Date();
// },5000);

// window.setInterval(function(){
//     interval.innerHTML = new Date();
// },1000);
// function prinDate(){
//     timeout2.innerHTML = new Date().toLocaleString();
// }

// const printTime = function(){
//     timeout2.innerHTML = new Date().toLocaleDateString();
// }
// window.setTimeout(printTime);
// window.setTimeout(prinDate);
document.getElementById("test").addEventListener("click",
    function(event){

       console.log(event);
       event.target.innerHTML = "stop";
    });

    //이벤트 발생시 처리할 함수가 이벤트 정보를 객체로 전달 받습니다.
    // document.getElementById("temp").addEventListener("keydown",
    // function(e){
    //       console.log(e);
    //       console.log(e.key);
    //       if(e.key === "Enter"){
    //         alert("엔터를 눌렀다.");
    //          test.focus();
    //       }
    // });
    const handlekeydown = 
   (e)=>{
        console.log(e);
        console.log(e.key);
        if(e.key === "Enter"){
          alert("엔터를 눌렀다.");
           test.focus();
        };
    }
    document.getElementById("temp").addEventListener("keydown", "handlekeydown");
       