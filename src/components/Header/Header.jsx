import React from "react";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import cn from "classnames";
const Header = ({
  title,
  subtitle,
  date,
  backgroundimage,
  children,
  classNames,
  textCenter,
}) => {
  return (
    <div
      className={s.header}
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <Navigation />
      <div
        className={cn(s.text, {
          [s.textRight]: classNames,
          [s.textCenter]: textCenter,
        })}
      >
        <p className={s.title}>{title}</p>
        <p className={s.subtitle}>{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default Header;
