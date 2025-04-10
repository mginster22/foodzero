import React from "react";
import s from "./Mains.module.scss";
import PriceBlock from "../../HomePage/PriceBlock/PriceBlock";

const menuPrice = [
  {
    title: "Deep Sea Snow White Cod Fillet ",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$20",
  },
  {
    title: "Steak With Rosemary Butter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$22",
  },
  {
    title: " Steaks with Grilled Kimchi",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$20",
  },
];

const Mains = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <p className={s.title}>Mains</p>
        <p className={s.subtitle}>
          This is a section of your menu. Give your section a brief description
        </p>
      </div>
      <div className={s.priceBlock}>
        <PriceBlock menuPrice={menuPrice} />
        <div className={s.imageBlock}>
          <img src="/images/mains.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Mains;
