import React from "react";

import styles from "./Earn.module.scss";
import SectionGrid from "../../baseComponents/SectionGrid/SectionGrid.jsx";

import { array } from "./Earn.data";
import videoBg from "./img/HQback.mp4";

const Earn = () => {
  return (
    <section className={styles.section_screen}>
      <div className={styles.section_screen_bg}>
        <video src={videoBg} autoPlay loop muted></video>
        <div className={styles.section_inner}>
          <SectionGrid
            array={array}
            title={"Earn"}
            subtitle={"Become the partner and earn big money"}
            className={styles.section_cards}
            classNameGrid={styles.cards}
          />
        </div>
      </div>
    </section>
  );
};

export default Earn;
