import React from "react";
import styles from "./WhatUNeed.module.scss";

import Button from "../../baseComponents/Button/Button.jsx";

import bg from "./img/bg.svg";

const WhatUNeed = () => {
  return (
    <div className={styles.section_screen}>
      <div className={styles.section_inner}>
        <div className={styles.section_title_btn}>
          <h2 className={styles.title}>
            Everything you need is now at Lafabet.Partners
          </h2>
          <Button
            value="for each partner"
            className={styles.section_btn}
            classNameImg={styles.section_btn_img}
          />
        </div>
        <div className={styles.section_wrap}>
          <h2 className={styles.title_enjoy}>Enjoy</h2>
          <h3 className={styles.sub_title_enjoy}>
            High daily profit promise you
          </h3>
          <div className={styles.grid_wrap}></div>
        </div>
      </div>
    </div>
  );
};

export default WhatUNeed;
