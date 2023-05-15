import React from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";

const Select = ({ className }) => {
  return (
    <select className={classNames(styles.select, className)} name="" id="">
      <option value="">Cooperation model</option>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
  );
};

export default Select;
