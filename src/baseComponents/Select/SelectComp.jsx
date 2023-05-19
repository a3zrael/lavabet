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
      // className={cx(css(getStyles("option", props)), {
      //   option: true,
      //   "option--is-disabled": isDisabled,
      //   "option--is-focused": isFocused,
      //   "option--is-selected": isSelected,
      // })}
    />
  );
};

export default SelectComp;
