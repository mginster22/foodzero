import React from "react";
import s from "./Footer.module.scss";
import InfoBlock from "../InfoBlock/InfoBlock";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <p className={s.logo}>Food Zero.</p>
          <div className={s.contact}>
            <p className={s.title}>Contact</p>
            <p className={s.subtitle}>+1+86 852 346 000 info@foodzero.com</p>
            <p className={s.subtitle}>
              1959 Sepulveda Blvd. Culver City, CA, 90230
            </p>
          </div>
          <div className={s.contactInfo}>
            <p className={s.contactTitl}>Never Miss a Recipe</p>
            <form className={s.emailForm}>
              <input
                type="email"
                value="Email Adress"
                className={s.inputContact}
              />
              <button>Subscribe</button>
            </form>
            <p className={s.subtitel}>
              Join our subscribers and get best recipe delivered each week!
            </p>
          </div>
        </div>
        <InfoBlock />
      </div>
    </div>
  );
};

export default Footer;
