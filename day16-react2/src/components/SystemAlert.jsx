import React from 'react'

export default function SystemAlert() {
    let isSystemDown = true;

  return (
    <div>{
        isSystemDown ? <div className='error-alert'>🚨 시스템 오류! 점검 중입니다.</div> : null
        }
    </div>
  )
}
