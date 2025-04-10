import React from 'react'
import s from './HeaderHomeBlock.module.scss'
const HeaderHomeBlock = () => {
  return (
    <div className={s.headerMenu}>
    <div className={s.title}>
      <h1 className={s.heading}>Our Menu</h1>
      <p className={s.subtitle}>
        This is a section of your menu. Give your section a brief
        description
      </p>
    </div>
    <div className={s.headerMenuImage}>
      <img src="/images/menuImage.png" alt="menuImage"/>
    </div>
  </div>
  )
}

export default HeaderHomeBlock;
