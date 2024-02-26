import React from "react";

import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = ({ className, type, placeholder, onChange }) => {
  return (
    <input
      className={classNames(styles.input, className)}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
