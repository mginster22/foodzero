import React from "react";
import s from "./Features.module.scss";

const Features = () => {
  const featuresBlock = [
    {
      title: "Premium Quality",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      title: "Seasonal Vegetables",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
    {
      title: "Fresh Fruit",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {featuresBlock.map((item, index) => (
          <div className={s.featuresBlock} key={index}>
            <div className={s.imageBlock}>
            </div>
            <h2 className={s.title}>{item.title}</h2>
            <p className={s.subtitle}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
