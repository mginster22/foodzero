import React from "react";
import s from "./SpicesBlock.module.scss";

// Вынеси данные в массив
const spicesImages = [
  { src: "/images/spices1.png", alt: "Spices 1" },
  { src: "/images/spices2.png", alt: "Spices 2" },
  { src: "/images/spices3.png", alt: "Spices 3" },
];

const SpicesBlock = () => {
  return (
    <div className={s.wrapper}>
      {spicesImages.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default SpicesBlock;
