import React from "react";
import styles from "./PromoList.module.scss";
import classNames from "classnames";

import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";

const PromoList = () => {
  return (
    <div className={styles.section_list_promo}>
      <div className={classNames(styles.section_firts, styles.section_list)}>
        <img src={icon1} alt="" />
        <p className={styles.section_firts_text}>
          Make a cool product for your traffic with a high CR
        </p>
      </div>
      <div className={classNames(styles.section_second, styles.section_list)}>
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
  );
};

export default PromoList;
