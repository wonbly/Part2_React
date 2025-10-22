import "./App.css";
import Board from "./board";
import Test from "./Test";
import Test2 from "./Test2";
import Testimonial from "./Testimonial";

function App() {
  return (
    <>

    <h3>내가 직접 만든 태그!</h3>
    <Testimonial />
    {/* <Board />
    <Test />
    <Test2 />
    <Test2 />
    <Test2 /> */}

    <h3>리액트 기본 문법</h3>
    <p>확장자: jsx (Javascript XML)</p>
    <p>자바스크립트 안에서 HTML을 직접 쓸 수 이게 해주는 문법</p>
    <p>움직이는 페이지를 만들기 위해서 사용하는게 자바스크립트!</p>
    <p>JSX - 자바스크립트 코드로 UI(화면)을 직접 제어하기 위한 문법</p>
    <p>터미널 - 컴퓨터에게 명령을 말로 하는 창문!</p>

    <ul>
      <li>터미널 - npm run dev (리액트 켜!)</li>
      <li>내 컴퓨터(Local)</li>
      <li>localhost - 인터넷에 올리는게 아니라, 내 컴퓨터 안에서만 보는 사이트!</li>
    </ul>

    <p>리액트는 함수를 이용해서 화면을 만든다.</p>
    <p>내가 직접 태그를 만들 수도 있다.</p>
    </>
  );
}

export default App;





/*

<section className="about">
 <h1>About me - Hyewon</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          accusantium! Deleniti nam commodi, laborum inventore eum unde.
          Provident molestias, optio esse maxime commodi quae. Voluptate
          dignissimos placeat rerum error dicta!{" "}
        </p>

        <div className="major-parent">
          <div className="major">
            <h3>Front-End</h3>
            <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
          </div>
          <div className="major">
            <h3>Mobile</h3>
            <p>Android, iOS, React Navtive, Flutter, Java, Swift, Kotlin</p>
          </div>
          <div className="major">
            <h3>Back-end</h3>
            <p>Java, JavaScript, Go, NodeJs, Rest APIs, GraphQL</p>
          </div>
        </div>
      </section>

      <h3>메인 화면을 구성하는 body랑 같은 역할을 한다.</h3>
      <h4>리액트란?</h4>
      <ul>
        <li>새로고침 없이 화면일부를 빠르게 바꾸는 기술</li>
        <li>웹사이트가 아니라 앱처럼 반응하도록 만들어주는 기술</li>
        <li>SPA?</li>
      </ul>

*/
