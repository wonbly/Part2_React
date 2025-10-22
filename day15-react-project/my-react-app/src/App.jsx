// 1. css 파일 연결
import "./app.css";

import React from 'react'

export default function App() {
  return (
    <div>
      <div className="wrap">
        <img src="https://postfiles.pstatic.net/MjAyMTExMjhfMjQx/MDAxNjM4MDkxNDcyODcy.ZtA05mFUg_0kXBiqEjE3MveXf_mRq4RxhRZVtX2hrzkg.yllUEuEz2G5JEU7CDGZMHAVR5ld4N2Kr_7O6Uz9oceUg.PNG.classe82/08._DJ_%EB%9D%BC%EC%9D%B4%EC%96%B8%EC%9D%98_%EA%B0%80%EC%9D%84,_%EC%BA%A0%ED%95%91%EA%B3%BC_%EB%B6%88%EB%A9%8D%EC%9D%B4_%ED%95%84%EC%9A%94%ED%95%9C_%EC%8B%9C%EA%B0%84.png?type=w773" alt="캠핑라이언" />
        <div className="title">
          Hello<br></br>
          I'm <span>Dream Coder</span>, Hailey
        </div>
        <div className="content">A software engineer currently residing in Sydney, Australia</div>
        <a href="#" className="btn">Contact Me</a>
      </div>




    </div>
  )
}




// // css파일을 포함해야된다.
// // 현재 내 파일을 기준으로 App.css파일을 포함하겠다.
// import "./App.css"
// function App() {
  
//   return (
//     <>
//     {/* div태그를 이용해서 팝업창
//     html에서 css셀렉터는 class="클래스명" 이었지만
//     리액트는 css셀렉터 className="클래스명"*/}
//     <div className="box">팝업창</div>

//     <div className="box2">팝업창2</div>

//     </>
//   )
// }

// export default App


//       // <h3>처음 만나는 리액트 프로젝트 구성</h3>
//       // <ul>
//       //   <li>node_modules - 리액트에서 제공하는 라이브러리들의 모음</li>
//       //   <li>위에 node_modules는 반드시 생성되야된다.</li>
//       //   <li>핵심폴더 - src </li>
//       //   <li> 안에 app.jsx 메인화면이다! (화면 구조 담당)</li>
//       //   <li> assets 폴더는 이미지,css,폰트등 </li>
//       //   <li>index.css - 전체 스타일 초기화용! </li>
//       //   <li>main.jsx - 프로젝트 시작점 </li>
//       // </ul>

//       // <ol>
//       //   <li>리액트 실행시 순서</li>
//       //   <li>cd my-react-app 안으로 이동 해야된다. 
//       //     <br/>이름이 길면 tab키를 누른다.</li>
//       //   <li>경로 변경된걸 확인 </li>
//       //   <li> 실행하는 명령어 - npm run dev</li>
        
//       // </ol>