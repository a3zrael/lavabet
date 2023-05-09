import React from "react";
import styles from "./ScrollWins.module.scss";
import array from "./dataScroll.jsx";

const ScrollWins = (props) => {
  return (
    <div className={styles.SlowScroll}>
      {array.map((element, index) => (
        <div key={index} className={styles.users}>
          {element}
        </div>
      ))}
    </div>
  );
};

export default ScrollWins;
