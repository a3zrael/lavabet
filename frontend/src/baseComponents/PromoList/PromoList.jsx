import React from "react";
import styles from "./PromoList.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";

const PromoList = ({ className }) => {
  const boxAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1 },
    }),
  };

  return (
    <div className={styles.section_list_promo}>
      <motion.div
        variants={boxAnimation}
        custom={2}
        className={classNames(
          styles.section_firts,
          styles.section_list,
          className
        )}
      >
        <img src={icon1} alt="" />
        <p className={styles.section_firts_text}>
          Make a cool product for your traffic with a high CR
        </p>
      </motion.div>
      <motion.div
        variants={boxAnimation}
        custom={3}
        className={classNames(styles.section_second, styles.section_list)}
      >
        <img src={icon2} alt="" />
        <p className={styles.section_second_text}>
          Create a stable and comfortable environment
        </p>
      </motion.div>
      <motion.div
        variants={boxAnimation}
        custom={4}
        className={classNames(styles.section_last, styles.section_list)}
      >
        <img src={icon3} alt="" />
        <p className={styles.section_last_text}>
          Communicate with Partners in their language
        </p>
      </motion.div>
    </div>
  );
};

export default PromoList;
