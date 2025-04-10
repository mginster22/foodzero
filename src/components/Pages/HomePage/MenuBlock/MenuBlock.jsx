import React from "react";
import s from "./MenuBlock.module.scss";
import PriceBlock from "../PriceBlock/PriceBlock";
import HeaderHomeBlock from "../HeaderHomeBlock/HeaderHomeBlock";

const menuPrice = [
  {
    title: "Deep Sea Snow White Cod Fillet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$20",
  },
  {
    title: "Steak With Rosemary Butter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$22",
  },
  {
    title: "Cucumber Salad",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$18",
  },
  
  {
    title: "Natural Wine Pairing",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$90",
  },
];

const MenuBlock = () => {
  return (
    <div className={s.container}>
      <HeaderHomeBlock />
      <PriceBlock menuPrice={menuPrice}/>
    </div>
  );
};

export default MenuBlock;
