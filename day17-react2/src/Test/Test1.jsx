import React from 'react'

export default function Test1({item}) {
  return (
    <div>
      <p>커피명 : {item.name}</p>
      <p>가격 : {item.price}</p>
      {item.size && <p>사이즈 : {item.size}</p>}
    </div>
  )
}
