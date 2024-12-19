const REST_API_KEY = "b6732200840942e643d3c8275f46a875";
 
const headers = {
    method: "GET",
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`
    }
  };
  //4개의 입력 요소 
  const query = document.getElementById("query");
  const page = document.getElementById("pageno");
  const size = document.getElementById("size");
  const accuracy = document.getElementById("accuracy");

//이벤트 핸들러 등록하기
  document.getElementById("search").addEventListener("click", handleSearch);
  document.getElementById("image").addEventListener("click", handleSearch);

  function handleSearch(event){
    if(event.target.id === "search"){
        alert("동영상 검색");
        kakao_fetch("https://dapi.kakao.com/v2/search/vclip","search");
    }else if(event.target.id === "image"){
        alert("이미지 검색");
        kakao_fetch("https://dapi.kakao.com/v2/search/image","image");
    }
  }

  function kakao_fetch(url, type){
    console.log(url);
  
    // 4개의 입력 요소값 가져오기
    let sort = accuracy.checked ? "accuracy" : "recency";
  
    // API 요청
    fetch(`${url}?query=${query.value}&page=${page.value}&size=${size.value}&sort=${sort}`)
    .then(response => {
      console.log("response", response);
      return response.json();
    })
    .then(obj => {
      console.log("obj", obj);
  
      // obj.documents가 존재하고 배열인지 확인
      if (Array.isArray(obj.documents)) {
        printData(obj, type);
      } else {
        console.error("No documents found in the response.");
      }
    })
    .catch(error => console.log("오류 : ", error));
  }
  
  function setImageLi(){
     return `
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
  }

  function printData(obj,type){
      const arr = obj.documents;
      const div = document.createElement("div");
      
      arr.forEach(item => {
        const  ul = document.createElement("ul");
        if(type === "search"){
              temp =setSearch();
        }else if(type =="image"){
          temp =setImageLi();

        }

      });
      document.body.appendChild(div);
  }
  function setSearch(){
    return `
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
}
