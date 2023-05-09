import React from "react";
import styles from "./Promo.module.scss";

import Button from "../../baseComponents/Button/Button.jsx";
import PromoList from "../../baseComponents/PromoList/PromoList.jsx";

import arrowDown from "./img/arrowDown.svg";

import videoBG from "./img/small_back.mp4";

const Promo = () => {
  return (
    <section className={styles.section_screen}>
      <video src={videoBG} autoPlay loop muted />
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
        <PromoList />
      </div>
    </section>
  );
};

export default Promo;
