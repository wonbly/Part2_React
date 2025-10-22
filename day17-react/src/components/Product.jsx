import React from 'react'

export default function Product(props) {
    
    console.log("찍어봐!Product!");
    // 콘솔에서 log,alert()했을 때
    // 2번씩 실행되는 이유는 리액트가 개발자 실수를 미리 잡기 위한 검사용 기능이다
    // npm run dev -- 개발모드 1번실행
    // StrictMode ! -- 개발자실수하지않게 1번더실행

  return (



    // props === {title:"아메리카노"}
    // props === {title:"카페라떼, price"3000}
    /* props를 쓰면 코드가 조금 길어지니까, 짧게 변경하기 위해서 매개변수 자리에 {}중괄호를 달아서 가독성도 좋아지고 짧게 변수명만 쓸 수 있게 해준다.
    
    리액트 화면을 보여주기(렌더링)
     - JSX문법 안에서 {}안에 들어간 걸 값으로
       바꿔서 HTML에 출력한다.
     - true,false,null,undefined 화면에
       아무것도 렌더링 되지 않는다.
     - 리액트가 무시한다(화면에 그리지 않는다.)
   
     리액트는 조건부 렌더링을 자주 사용함
   
     */


    <div>
        <h3>{String(props.title)}</h3>
        <p>{String(props.price)}원</p>
        <p>{String(props.decf ? "디카페인":"카페인")}</p>
        {/* 조건부렌더링 true일때만 태그를 보여라! */}
        <p>{props.isHot && <span>🔥Hot</span>}</p>

    </div>
  )
}
