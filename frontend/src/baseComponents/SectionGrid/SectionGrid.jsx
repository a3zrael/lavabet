import React from "react";
import { motion } from "framer-motion";

import styles from "./SectionGrid.module.scss";
import classNames from "classnames";

const SectionGrid = ({ array, title, subtitle, className, classNameGrid }) => {
  const boxAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1.5 },
    }),
  };

  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={classNames(styles.section_grid_wrap, className)}
    >
      <div className={styles.section_inner_grid}>
        <motion.h3
          variants={textAnimation}
          custom={2}
          className={styles.section_title_grid}
        >
          {title}
        </motion.h3>
        <motion.h3
          variants={textAnimation}
          custom={3}
          className={styles.section_subtitle_grid}
        >
          {subtitle}
        </motion.h3>
      </div>
      <div className={classNames(styles.section_grid, classNameGrid)}>
        {array.map((element, index) => (
          <motion.div
            variants={boxAnimation}
            custom={index + 3}
            key={index}
            className={styles.grid}
          >
            <p className={styles.grid_text}>{element.title}</p>
            <img src={element.icon} alt="" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionGrid;
