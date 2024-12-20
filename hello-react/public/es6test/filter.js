//filter, map 은 배열 에서 매우 중요한 것이다.
const keywords = ['package','filter','map','gitignore','if','for'];

keywords.map((item,idx)=>{
    console.log("위치 :",idx, "값:",item);
});
//filter 는 특정 조건에 맞는 배열 요소만 추출하여 새로운 배열을 만듭니다.
const newkeyword = keywords.filter((item)=> item.length>5);
console.log('새로운 배열:',newkeyword)