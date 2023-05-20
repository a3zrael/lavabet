import React from "react";
import styles from "./TextArea.module.scss";
import classNames from "classnames";

const TextArea = ({ className }) => {
  return (
    <textarea
      className={classNames(styles.text__area, className)}
      name="text"
      cols="30"
      rows="10"
      placeholder="More about results"
    />
  );
};

export default TextArea;
