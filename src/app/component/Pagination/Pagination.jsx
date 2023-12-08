import React from 'react'
import style from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.button}>Sebelumnya</button>
      <button className={style.button}>Selanjutnya</button>
    </div>
  );
}

export default Pagination
