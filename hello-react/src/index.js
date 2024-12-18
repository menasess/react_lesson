import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

//react 버전이 낮은 소스는 코드가 조금 다름.
//react.StrictMode는 리액트 버전 19버번 부터 설정. 오래된 API 관리등의 목적.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //app 컴포넌트를 랜더링 합니다. -> id가 root 요소의 컴포넌트/
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
