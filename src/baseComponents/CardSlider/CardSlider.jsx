import React from "react";
import styles from "./CardSlider.module.scss";

const CardSlider = ({ className, date, logo, img }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.date_logo}>
        <p className={styles.date}>{date}</p>
        <img src={logo} alt="" />
      </div>
      <div className={styles.img_box}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CardSlider;
