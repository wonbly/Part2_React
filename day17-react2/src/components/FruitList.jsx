import React from 'react'

export default function FruitList({items}) {
  return (
    <div>
      <h3>과일명 : {items.name}</h3>
      {items.price && <p>과일가격:{items}</p>}
      {/* 
      이건 너무 길어
      <h3>가격 : { items === undefined ? '' : items.price}</h3> */}


        {/* <h3>{items}</h3>
        <p>사과 : {items[0]}</p>
        <p>바나나 : {items[1]}</p>
        <p>포도 : {items[2]}</p> */}




    </div>
  )
}
