import React from "react";
import styles from "./SectionGrid.module.scss";
import classNames from "classnames";

const SectionGrid = ({ array, title, subtitle, className, classNameGrid }) => {
  return (
    <div className={classNames(styles.section_grid_wrap, className)}>
      <div className={styles.section_inner_grid}>
        <h3 className={styles.section_title_grid}>{title}</h3>
        <h3 className={styles.section_subtitle_grid}>{subtitle}</h3>
      </div>
      <div className={classNames(styles.section_grid, classNameGrid)}>
        {array.map((element, index) => (
          <div key={index} className={styles.grid}>
            <p className={styles.grid_text}>{element.title}</p>
            <img src={element.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;
