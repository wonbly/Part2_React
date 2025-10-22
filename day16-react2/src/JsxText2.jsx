import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function JsxText2() {

    // 1. 삼항연산자 - if문 짧게 쓰기 위해서 사용하는 기호
    // -?

    // 1. 로그인 중인지 아닌지 구별하는 방법
    let isLogin = true;

    // 2. 시간을 변경하는 방법
    let hour = 13;

    // 3. ture일 경우 Header 컴포넌트를 보이고,
    //    false일 경우 Footer 컴포넌트를 보인다.
    
    let isHeader = true;

  return (
    <div>
        <h3>jsx의 새로운 문법!</h3>
        <p>기본적으로 return ()안에는 HTML태그만 작성가능하다</p>
        <p>자바스크립트 코드를 작성해야할 때가 있다.</p>

        {
            // 중괄호를 이용해서 자바스크립트 코드를 같이 사용할 수 있다.
            isLogin ? <h2>로그인 성공</h2> : <h2>로그인 필요</h2>
            // 안에 내용 cotent도 쉽게 바꿀 수 있음
        }
        <h3>{ hour <12 ? "🌞오전이에요!" : "🌜오후에요!"}</h3>

        <h3>{ isHeader ? <Header /> : <Footer />}</h3>


    

    </div>
  )
}
