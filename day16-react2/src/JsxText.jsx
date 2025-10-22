// 리액트
// function App() {
//     return <h1>안녕!</h1>;
// }

import React from 'react'

export default function JsxText() {

  let name = "Hailey";
  let mycolor = "lightcoral";
  return (
    <div>
        {/* 리액트에서 직접적으로 style을 줄 수 있다. */}
        {/* 객체타입 {key: value, key:value...} */}
        <h1 style={
            {color:mycolor}
        }>Hello, {name}!</h1>

        <h3 style={{color:mycolor , fontSize:"1.3rem"}}>Bye~!</h3>


    </div>
  )
}
