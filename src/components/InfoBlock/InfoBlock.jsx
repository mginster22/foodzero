import React from "react";
import s from "./InfoBlock.module.scss";
const icons = [
  {
    img: "/images/insta.svg",
  },
  {
    img: "/images/twit.svg",
  },
  {
    img: "/images/yout.svg",
  },
  {
    img: "/images/face.svg",
  },
];
const InfoBlock = () => {
  return (
    <div className={s.iconsBlock}>
      <div className={s.dottedFull}></div>
      <div className={s.iconsinfo}>
        <p>© 2020 Zero Inc. All rights Reserved</p>
        <div className={s.icons}>
          {icons.map((item, index) => (
            <img src={item.img} key={index} alt={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
