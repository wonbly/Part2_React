import React from 'react'
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZCjyXhlXQrIi6zpxnvkGHWAKuBZ9YF0peg&s" alt="개발자사진" />
        <div></div>


    </div>
  )
}

// 리액트는 함수를 부르면 화면이 생기는 프로그램
// 1.App()함수가 동작한다.
// 2.return() 안에 html을 읽는다. (화면에 표시할 내용 준비)
// 3.testimonial을 태그를 만나면 (내가 만든 태그 실행!)
// 4.그 함수를 실행해서 return(내가만든 태그들을 화면에 표시할 준비)
// 5.App()으로 가지고 와서 화면에 보인다.
