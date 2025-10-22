// Card2.jsx

import React from 'react'

export default function Card2({ img, title, btn }) {
  return (
     <div>
        <img src={img} alt={title}></img>
        <button>{btn}</button>
        <h4>{title}</h4>
     </div>
  )
}