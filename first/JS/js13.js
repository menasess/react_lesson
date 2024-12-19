let eng ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let kor ="가나다라마바사아자차카타파하힣";

eng_result.innerHTML = eng.length;
kor_result.innerHTML = kor.length;

eng_result.innerHTML = eng.charAt(4);
kor_result.innerHTML = kor.charAt(4);

eng_result.innerHTML = eng.charCodeAt(4);
kor_result.innerHTML = kor.charCodeAt(4);
kor_result.innerHTML = kor.charCodeAt(4).toString(16);

kor_result.innerHTML = `가(${kor.charCodeAt(0).toString()})~힣(${kor.charCodeAt(14).toString()})`;
//인덱스를 지정하면 해당 문자를 가져오는 메서드 : charAt(), at(음수값 가능)
kor_result.innerHTML = kor.at(-2);
eng_result.innerHTML = eng.at(-2);
//문자열에서 특정 부분 추출 : substring(), slice(음수값 가능 )
kor_result.innerHTML = kor.substring(3,7);//인덱스 3번 부터 6번까지(7-3개)
eng_result.innerHTML = eng.substring(10); //끝까지

kor_result.innerHTML = kor.slice(-5,-2);
eng_result.innerHTML = eng.slice(-5,-2);

let t='5';
temp.value = t.padStart(4,"*")
temp.value = t.padEnd(4,"*")
temp.value = "@".repeat(4)

//문자열 치환 : replace 
t='Hello word hello';
temp.value  = t.replace("llo","**");
temp.value  = t.replaceAll("llo","**");

temp.value  = t.replace(/llo/gi,"**");
temp.value  = t.replace(/hello/i,"안녕");

text = "ABCD EFG HI JKLMNOPQRSTUVWXYZ";
indexof.value = text.IndexOf("ABC");
indexof.value = text.indexof("ABC",15);
indexof.value = text.indexof("ABC",25);

indexof.value = text.LastIndexOf("ABC");