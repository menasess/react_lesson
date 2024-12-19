const REST_API_KEY = "b6732200840942e643d3c8275f46a875";
 
const headers = {
    method: "GET",
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`
    }
  };
  
function search(){
   let query="소녀시대";

    fetch(`https://dapi.kakao.com/v2/search/vclip?query=${query}`,headers)
    .then(response => { 
         console.log(response);
         document.write(response);
         return response.json();
         
    })
    .then( function (data) { 
        console.log(data);
        document.write(data);
        printData(data);
    })
    .catch(error => console.error("오류발생:",error));
}

document.getElementById("search").addEventListener("click",search);
document.getElementById("image").addEventListener("click",image);

function printData(data) {
    const list = data.documents;
    const div = document.createElement("div");

    list.forEach(function (item) {
        const ul = document.createElement("ul");

        // Ensure properties exist before accessing them
        ul.innerHTML = `
        <li>${item.author || 'No author'}</li>
        <li>${item.title || 'No title'}</li>
        <li>${item.play ? item.play._time : 'No play time'}</li>
        <li>${item.datetime || 'No datetime'}</li>
        <li>
            <a href="${item.url}" target="_blank">보러가기</a>
        </li>
        <li>
            ${item.thumbnail ? `<img src="${item.thumbnail}" width="100px">` : 'No thumbnail available'}
        </li>
        `;

        div.appendChild(ul);
    });

    document.body.appendChild(div);
}


// async function search() {
//     const REST_API_KEY = 'b6732200840942e643d3c8275f46a875';  // 여기에 본인의 REST API Key를 입력하세요.
//     const API_URL = `https://dapi.kakao.com/v2/search/vclip?query=${query}`;  // 예시로 '사용자 정보 가져오기' API URL을 사용
//     try {
//       const response = await fetch(API_URL, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${REST_API_KEY}`, 
//           'Content-Type': 'application/json'
//         }
//       });
  
//       if (!response.ok) {
//         throw new Error('API 호출에 실패했습니다');
//       }
  
//       const data = await response.json();
//       console.log('카카오 API 응답 데이터:', data);
//     } catch (error) {
//       console.error('오류 발생:', error);
//     }
//   }
  
//   document.getElementById("search").addEventListener("click",search);
// 응답 받은 json 문자열이 자바스크립트 객체로 변경


function image(){
    let = query = "소녀시대";
    fetch(`https://dapi.kakao.com/v2/search/image?query=${query}`,headers)
    .then(function(response){
        document.write(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        document.write(data);
        printData1(data);
    })
    .catch(error => console.error("오류발생 : ",error));
}


function printData1(data){
    const list = data.documents;
    const div = document.createElement("div");

    list.forEach(function (item) {
        const ul = document.createElement("ul");

        // Ensure properties exist before accessing them
        ul.innerHTML = `
        <li>${item.collection || 'No author'}</li>
        <li>${item.width || 'No title'}px x ${item.height}px</li>
        <li>${item.play ? item.play._time : 'No play time'}</li>
        <li>${item.datetime || 'No datetime'}</li>
        <li>
            <a href="${item.doc_url}" target="_blank">${item.dispay_sitename}</a>
        </li>
        <li>
            ${item.thumbnail ? `<img src="${item.thumbnail}" width="100px">` : 'No thumbnail available'}
        </li>
        `;

        div.appendChild(ul);
    });

    document.body.appendChild(div);
}
