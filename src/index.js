import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * react 동작 방식..
 *  react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거함...
 *  application이 로드할 때, 빈 HTML을 가지고 오고, react가 내가 작성해놓은 컴포넌트을 HTML에 넣어줌
 *  react application이 하나의 component만을 rendering 해야함
 * 
 * component 
 *  HTML을 반환하는 함수
 *  컴포넌트 사용 방법 ex) <App />
 * 
 * JSX
 *  javascript와 HTML 사이의 조합..?
 *  javascript안의 HTML
 * 
 */

// App.js 컴포넌트를 'root'란 아이디 내부에 삽입
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

