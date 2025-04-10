import React from "react";
import s from "./HeaderBlock.module.scss";
import SpicesBlock from "../SpicesBlock/SpicesBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import Navigation from "../../../Navigation/Navigation";
const HeaderBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Navigation />
        <div className={s.headerBlock}>
          <div>
            <h1 className={s.title}>
              Healthy Eating is important part of lifestyle
              <p className={s.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </h1>
          </div>

          <div className={s.imageWrapper}>
            <img src="/images/food1home.png" alt="food1" />
            <SpicesBlock />
          </div>
        </div>
        <div className={s.imageblock}>
          <ImageBlock
            title="Start to plan your diet today"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
            imageSrc="/images/food2home.png"
            imageAlt="Fresh Food"
            imagePosition="top"
          />

          <ImageBlock
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
            imageSrc="/images/food3home.png"
            imageAlt="Healthy Snacks"
            imagePosition="bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
