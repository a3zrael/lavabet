import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import styles from "./SelectComp.module.scss";
import classNames from "classnames";

const SelectComp = (props) => {
  const { classNamePrefix, options, styles, defaultValue, placeholder } = props;
  const animatedComponents = makeAnimated();
  return (
    <Select
      ocloseMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      classNamePrefix={classNamePrefix}
    />
  );
};

export default SelectComp;
