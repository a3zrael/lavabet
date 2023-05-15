import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import arrow from "./img/arrowRight.svg";

const Button = ({ value, className, classNameImg }) => {
  return (
    <button type="button" className={classNames(styles.btn, className)}>
      <span>{value}</span>
      <img src={arrow} alt="" className={classNameImg} />
    </button>
  );
};

export default Button;
