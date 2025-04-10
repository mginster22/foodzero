import React from "react";
import s from "./CategoryBlock.module.scss";

const images = [
  {
    image: "/images/menu1.png",
    food:"Starters"
},
{
    image: "/images/menu2.png",
    food:"Mains",
},
{
    image: "/images/menu3.png",
    food:"Soups",
  },
];

const CategoryBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <p className={s.title}>Calories Energy Balance</p>
          <p className={s.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={s.imageBlock}>
          {images.map((item, index) => (
            <div className={s.imagepos}>
              <img src={item.image} alt={item.image} />
              <div className={s.buttonStyle}>
                <button>{item.food}</button>
                <div>
                  <img
                    src="/images/arrow.png"
                    style={{ width: "29px" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBlock;
