import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

import Modal from "../../baseComponents/Modal/Modal.jsx";
import Button from "../../baseComponents/Button/Button.jsx";
import ScrollWins from "./ScrollWins/ScrollWins.jsx";
import Input from "../../baseComponents/Input/Input.jsx";

import styles from "./Header.module.scss";

import logo from "./img/Logo.svg";
import { list, colorStyles } from "./Header.data.js";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [userData, setUserData] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const blockStyle = {
    display: isHidden ? "none" : "block",
    opacity: isHidden ? 0 : 1,
    transition: "height 0.3s ease, opacity 0.3s ease",
  };

  console.log(userData);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.box__left}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.title}>Enjoy and earn</p>
        </div>
        <div className={styles.box__right}>
          <div className={styles.lang}>
            <Select
              options={list}
              defaultValue={list[0]}
              classNamePrefix="custom_select_header"
              // styles={colorStyles}
              isSearchable={false}
            />
          </div>

          <Button
            value="Log in"
            className={styles.section_btn}
            onClick={() => setModalActive(true)}
          />
        </div>
      </div>
      <div style={blockStyle} className={styles.container__scroll}>
        <ScrollWins />
      </div>
    </header>
  );
};

export default Header;
