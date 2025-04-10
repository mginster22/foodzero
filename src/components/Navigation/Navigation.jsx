import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import cn from "classnames";
import s from "./Navigation.module.scss";

const icons = [
  { img: "/images/insta.svg" },
  { img: "/images/twit.svg" },
  { img: "/images/yout.svg" },
  { img: "/images/face.svg" },
];

const Navigation = () => {
  const imageStyle = {
    logo: { width: "150px", height: "auto", cursor: "pointer" },
    burger: { width: "50px", height: "auto", cursor: "pointer" },
  };

  const linkItem = [
    { name: "HOME", src: "/" },
    { name: "Menu", src: "/menu" },
    { name: "Blogs", src: "/blogs" },
    { name: "About", src: "/about" },
    { name: "Contact", src: "/contact" },
  ];

  const [active, setActive] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const containerClass = cn(s.container, {
    [s.activeContainer]: active,
  });
  const burgerMenuClass = cn(s.burgermenu, {
    [s.burgermenuActive]: active,
  });

  const burgerMenuRef = useRef(); // Вся обёртка меню
  const menuContentRef = useRef(); // Только контент внутри
  const burgerButtonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        active &&
        menuContentRef.current &&
        !menuContentRef.current.contains(e.target) &&
        !burgerButtonRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div className={containerClass}>
      <nav className={s.nav}>
        <div className={burgerMenuClass} ref={burgerMenuRef}>
          <div
            ref={menuContentRef}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <div className={s.close} onClick={() => setActive(false)}>
                X
              </div>
              {linkItem.map((item) => (
                <div className={s.burgerItem} key={item.name}>
                  <div className={s.doted}></div>
                  <Link
                    to={item.src}
                    className={cn(s.link, {
                      [s.active]: currentPath === item.src,
                    })}
                    onClick={() => setActive(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className={s.contact}>
              <h2>Contact</h2>
              <div className={s.dottedFull}></div>
              <div className={s.contactItem}>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+86852346000">+86 852 346 000</a>
                </p>
              </div>
              <div className={s.contactItem}>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@foodzero.com">info@foodzero.com</a>
                </p>
              </div>
              <div className={s.contactItem}>
                <p>
                  <strong>Address:</strong>
                  <br />
                  1959 Sepulveda Blvd.
                  <br />
                  Culver City, CA, 90230
                </p>
                <div className={s.icons}>
                  {icons.map((item, index) => (
                    <img src={item.img} key={index} alt={item.img} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(s.headerBlock, {
            [s.headerBlockActive]: active,
          })}
        >
          <div className={s.wrapper}>
            <Link to="/">
              <img src="/images/Logo.png" alt="logo" style={imageStyle.logo} />
            </Link>
            <div ref={burgerButtonRef} onClick={() => setActive(!active)}>
              <img
                src="/images/burger.png"
                alt="burger"
                style={imageStyle.burger}
              />
            </div>
          </div>
          <div className={s.wrapper}>
            <a href="tel:+86852346000" className={s.phoneNumber}>
              +86 852 346 000
            </a>
            <button className={s.buttonReserv}>Reservations</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
