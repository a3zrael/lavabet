import React from "react";
import styles from "./Promo.module.scss";
import classNames from "classnames";

import Button from "../../baseComponents/Button/Button.jsx";

import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";
import arrowDown from "./img/arrowDown.svg";

const Promo = () => {
  return (
    <section className={styles.section_screen}>
      <div className={styles.section_inner}>
        <div className={styles.section_title_box}>
          <h1 className={styles.section_title}>
            10 years of experience in traffic arbitrage taught us:
          </h1>
        </div>
        <div className={styles.section_btn_partner}>
          <Button
            value="Become the partner"
            className={styles.section_btn}
            classNameImg={styles.section_btn_img}
          />
        </div>
        <div className={styles.arrow_box}>
          <img className={styles.arrow} src={arrowDown} alt="" />
        </div>
        <div className={styles.section_list_promo}>
          <div
            className={classNames(styles.section_firts, styles.section_list)}
          >
            <img src={icon1} alt="" />
            <p className={styles.section_firts_text}>
              Make a cool product for your traffic with a high CR
            </p>
          </div>
          <div
            className={classNames(styles.section_second, styles.section_list)}
          >
            <img src={icon2} alt="" />
            <p className={styles.section_second_text}>
              Create a stable and comfortable environment
            </p>
          </div>
          <div className={classNames(styles.section_last, styles.section_list)}>
            <img src={icon3} alt="" />
            <p className={styles.section_last_text}>
              Communicate with Partners in their language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
