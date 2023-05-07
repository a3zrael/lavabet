import React from "react";
import styles from "./Footer.module.scss";

import tg from "./img/tg.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.box_right}>
          <div className={styles.box_tg}>
            <img src={tg} className={styles.tg__img} alt="" />
            <p className={styles.tg__text}>@lafabet</p>
          </div>
          <div className={styles.box_tg}>
            <img src={tg} className={styles.tg__img} alt="" />
            <p className={styles.tg__text}>@lafabet</p>
          </div>
        </div>
        <div className={styles.box_centr}>
          <p>
            <span className={styles.text_contact}>Contacts</span>{" "}
            info@lafabet.com
          </p>
        </div>
        <div className={styles.box_left}>FAQ Terms & Conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
