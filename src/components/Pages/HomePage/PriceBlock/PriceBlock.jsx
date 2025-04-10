import React from "react";
import s from "./PriceBlock.module.scss";



const PriceBlock = ({menuPrice}) => {
  return (
    <ul className={s.wrapper}>
      {menuPrice.map((item, index) => (
        <li key={index} className={s.item}>
          <div className={s.priceBlock}>
            <span className={s.price}>{item.price}</span>
            <span className={s.borderDot}></span>
          </div>
          <div className={s.text}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.subtitle}>{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PriceBlock;
