import React from "react";
import s from "./Location.module.scss";

const Location = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.adress}>
        <div>
          <img src="/images/adress1.png" alt="adress" />
        </div>
        <div className={s.title}>
          <p className={s.text}>
            We can be contacted via <br />
            <span>email info@foodzero.com</span> <br />
            or telephone on <span>+86 852 346 000</span>
          </p>
        </div>
      </div>
      <div className={s.adress}>
        <div className={s.location}>
          <p className={s.text}>
            We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
          </p>
          <button>View in maps</button>
        </div>
        <div>
          <img src="/images/adress2.png" alt="adress" />
        </div>
      </div>
    </div>
  );
};

export default Location;
