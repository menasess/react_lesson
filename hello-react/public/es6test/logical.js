//논리연산자 와 활동
//조건 여러개 검사 조건 연결 방법and로 or 선택.

let x = -10;
let result = (x<0) || (x>100);
console.log('result : ',result);

result = (x>0) && (x  <= 100);
console.log('result : ',result);
//and : true && true = true , true && false = false, 

x = -10;// 10, -10 출력 되고 안되고는 1번이 참이면 나오고 거짓이면 실행조차 안됨,
 (x >0) && console.log("단축평가 예시");

 if(x > 10){
     console.log("x는 10보다 크다")
 }else{
    console.log("x는 10보다 작다")
 }

 x > 10 ? console.log('x는 10보다 크다') : console.log('x는 10보다 작다.');