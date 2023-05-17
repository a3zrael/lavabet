import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import styles from "./SelectComp.module.scss";
import classNames from "classnames";

const SelectComp = (props) => {
  const { className, options, styles, defaultValue, placeholder } = props;
  const animatedComponents = makeAnimated();
  return (
    <Select
      className={classNames(styles.select, className)}
      ocloseMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      styles={styles}
    />
  );
};

export default SelectComp;
