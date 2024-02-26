import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";


const CustomSelect = (props) => {
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

export default CustomSelect;
