import React from "react";
import Select from "react-select";

import Button from "../../baseComponents/Button/Button.jsx";
import ScrollWins from "./ScrollWins/ScrollWins.jsx";

import styles from "./Header.module.scss";

import logo from "./img/Logo.svg";
import { list, colorStyles } from "./Header.data.js";

const Header = () => {
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
              styles={colorStyles}
            />
          </div>
          <Button value="Sign up" className={styles.section_btn} />
        </div>
      </div>
      <div className={styles.container__scroll}>
        <ScrollWins />
      </div>
    </header>
  );
};

export default Header;
