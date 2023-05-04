import React from "react";

import Button from "../../baseComponents/Button/Button.jsx";
import ScrollWins from "./ScrollWins/ScrollWins.jsx";

import styles from "./Header.module.scss";

import logo from "./img/Logo.svg";
import arrow from "./img/arrowUp.svg";

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
            En
            <img src={arrow} className="arrowUp" alt="" />
          </div>
          <Button value="Sign up" />
        </div>
      </div>
      <div className={styles.container}>
        <ScrollWins />
      </div>
    </header>
  );
};

export default Header;
