import React from "react";
import styles from "./Promo.module.scss";
import { useParallax } from "react-scroll-parallax";

import Button from "../../baseComponents/Button/Button.jsx";
import PromoList from "../../baseComponents/PromoList/PromoList.jsx";

import arrowDown from "./img/arrowDown.svg";

import videoBG from "./img/small_back.mp4";

const Promo = () => {
  const parallax = useParallax({
    translateY: [-200, 200],
  });

  return (
    <section className={styles.section_screen}>
      <div className={styles.section_parallax_box} ref={parallax.ref}>
        <video src={videoBG} autoPlay loop muted />
      </div>
      <Button
        value="Become the partner"
        className={styles.section_btn}
        classNameImg={styles.section_btn_img}
      />

      <div className={styles.section_inner}>
        <div className={styles.section_wrap}>
          <div className={styles.section_title_box}>
            <h1 className={styles.section_title}>
              10 years of experience in traffic arbitrage taught us:
            </h1>
          </div>
          <div className={styles.arrow_box}>
            <img className={styles.arrow} src={arrowDown} alt="" />
          </div>
        </div>
        <PromoList />
      </div>
    </section>
  );
};

export default Promo;
