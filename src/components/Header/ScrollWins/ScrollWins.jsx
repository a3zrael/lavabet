import React from "react";
import styles from "./ScrollWins.module.scss";

const ScrollWins = (props) => {
  const array = [
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
    "Partner #3092 withdrew $4509",
  ];
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
