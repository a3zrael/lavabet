import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import arrow from "./img/arrowRight.svg";

const Button = ({ value, className }) => {
  return (
    <div className={styles.box__btn}>
      <button type="button" className={classNames(styles.btn, className)}>
        {value}
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
