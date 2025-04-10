import React from "react";
import s from "./Starters.module.scss";
import PriceBlock from "../../HomePage/PriceBlock/PriceBlock";

const menuPrice = [
  {
    title: "Grilled Okra and Tomatoes ",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$20",
  },
  {
    title: "Cucumber Salad",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$18",
  },
  {
    title: " Basil Pancakes",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
  },
];

const Starters = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <p className={s.title}>Starters</p>
        <p className={s.subtitle}>
          This is a section of your menu. Give your section a brief description
        </p>
      </div>
      <div className={s.priceBlock}>
        <div className={s.imageBlock}>
          <img src="/images/starters1.png" alt="img"/>
        </div>
        <PriceBlock menuPrice={menuPrice} />
      </div>
    </div>
  );
};

export default Starters;
