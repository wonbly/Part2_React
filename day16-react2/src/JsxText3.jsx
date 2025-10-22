import React from 'react'
import './JsxText3.css'

export default function JsxText3() {


    // 1. 더워요! 배경색을 빨간색 변경
    // 2. 추워요! 배경색을 파란색 변경
    let isHot = true;

    // 온라인 중이면 초록색
    // 오프라인 중이면 회색
    let isOnline = true;


  return (
    <div>
        <h3>className 속성에도 삼항연산자를 쓸 수 있다.</h3>
        <p>클래스명을 이용해서 디자인 변경!</p>

        <div className={isOnline ? "active" : "inactive"}>

        </div>



        <h3>디자인도 삼항연산자를 사용해서 변경할 수 있다.</h3>
        <h4 style={{
            background: isHot ? "red" : "blue",
            color: isHot ? "#fce100" : "#63def2",
            padding: "1rem"}}>
            {isHot ? "🔥 더워요!" : "❄️ 추워요!"}
        </h4>


    </div>
  )
}
