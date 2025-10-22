import React from 'react'

export default function profile({img,name,team,joined}) {
  return (
    <div>
        <img src={img}></img>
        <h3>개발자 이름 : {name}</h3>
        <p>부서 : {team}</p>
        <p>입사 : {joined}</p>
    </div>
  )
}
