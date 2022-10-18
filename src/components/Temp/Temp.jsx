import React from 'react';
import s from './Temp.module.css'

export default function Temp({label, value}) {
  return (
    <div className={s.temp}>
      <span className={s.label}>{label}</span>
      <span className={s.value}>{value}</span>
    </div>
  )
}
