import React from 'react'

export default function FixedAuthStatus() {
    let isAuthenticated = true;

  return (
    <div>
        <button>{
            isAuthenticated ? "로그아웃 진행" : "로그인 필요"
            }</button>



    </div>
  )
}
