import React from "react";
import styles from "./WhatUNeed.module.scss";
import { motion } from "framer-motion";
import Button from "../../baseComponents/Button/Button.jsx";

import { arrayData } from "./WhatUNeed.data";
import { arrayData2 } from "./WhatUNeed.data";

import SectionGrid from "../../baseComponents/SectionGrid/SectionGrid.jsx";

const WhatUNeed = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.7 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={styles.section_screen}
    >
      <div className={styles.section_inner}>
        <motion.div
          variants={textAnimation}
          custom={0}
          className={styles.section_title_btn}
        >
          <h2 className={styles.title}>
            Everything you need{" "}
            <span className={styles.title_text}>
              is now at Lafabet.Partners
            </span>
          </h2>
          <Button
            value="for each partner"
            className={styles.section_btn}
            classNameImg={styles.section_btn_img}
          />
        </motion.div>
        <SectionGrid
          array={arrayData}
          title={"Enjoy"}
          subtitle={"High daily profit promise you"}
          className={styles.box}
        />
        <SectionGrid
          array={arrayData2}
          title={"Use for free"}
          subtitle={"Become the partner and earn big money"}
          className={styles.box2}
        />
      </div>
      <div className={styles.circle} />
    </motion.section>
  );
};

export default WhatUNeed;
