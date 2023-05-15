import React from "react";
import styles from "./WhatUNeed.module.scss";

import Button from "../../baseComponents/Button/Button.jsx";

import { arrayData } from "./WhatUNeed.data";
import { arrayData2 } from "./WhatUNeed.data";

import SectionGrid from "../../baseComponents/SectionGrid/SectionGrid.jsx";

const WhatUNeed = () => {
  return (
    <section className={styles.section_screen}>
      <div className={styles.section_inner}>
        <div className={styles.section_title_btn}>
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
        </div>
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
    </section>
  );
};

export default WhatUNeed;
