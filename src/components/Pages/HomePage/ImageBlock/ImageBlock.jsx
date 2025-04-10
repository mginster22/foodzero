import React from "react";
import styles from "./ImageBlock.module.scss"; // если ты используешь CSS-модули
import classNames from "classnames";

const ImageBlock = ({ title, subtitle, imageSrc, imageAlt, imagePosition }) => {
  return (
    <div className={styles.block}>
      {imagePosition === "top" && (
        <>
          <img src={imageSrc} alt={imageAlt} className={styles.imageTop} />
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subTitle}>{subtitle}</p>
          </div>
        </>
      )}

      {imagePosition === "bottom" && (
        <>
          <div className={styles.text}>
            <p className={styles.subTitle}>{subtitle}</p>
          </div>
          <img src={imageSrc} alt={imageAlt} className={styles.imageBottom} />
        </>
      )}
    </div>
  );
};
export default ImageBlock;
