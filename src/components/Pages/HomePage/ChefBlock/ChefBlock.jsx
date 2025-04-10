import React from "react";
import s from "./ChefBlock.module.scss";
const ChefBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.imageBlock}>
          <img src="/images/Group 1.png" alt="man" className={s.man} />
          <div className={s.leaf1}>
            <img src="/images/leaf2.svg" alt="leaf2"/>
          </div>
        </div>
        <div className={s.text}>
          <h1 className={s.title}>Excellent cook</h1>
          <p className={s.subtitle}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </p>
          <div className={s.leaf2}>
            <img src="/images/leaf2.svg" alt="leaf2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBlock;
