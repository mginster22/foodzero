import React from "react";
import s from "./Drinks.module.scss";
import PriceBlock from "../../HomePage/PriceBlock/PriceBlock";

const menuPrice = [
  {
    title: "Wine Pairing ",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$20",
  },
  {
    title: "Natural Wine Pairing",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$18",
  },
  {
    title: " Whisky Flyer",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
  },
];

const Drinks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <p className={s.title}>Pastries & Drinks</p>
        <p className={s.subtitle}>
          This is a section of your menu. Give your section a brief description
        </p>
      </div>
      <div className={s.priceBlock}>
        <div className={s.imageBlock}>
          <img src="/images/drinks.png" alt="img"/>
        </div>
        <PriceBlock menuPrice={menuPrice} />
      </div>
    </div>
  );
};

export default Drinks;
