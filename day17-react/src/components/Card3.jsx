// Card3.jsx

import React from 'react'

export default function Card3({ img, title, btn }) {
  return (
     <div>
        <img src={img} alt={title}></img>
        <button>{btn}</button>
        <h4>{title}</h4>
     </div>
  )
}