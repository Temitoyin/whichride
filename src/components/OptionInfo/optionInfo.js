import React from "react";
import Icon from "../Icon/icon";
import styles from "./optionInfo.module.scss";
const OptionInfo = ({icon, heading, subText}) => {
  return <div className={styles.optionInfo} id="choicesItem">
    <div className={styles.optionInfo__icon}>
      <Icon name={icon} />
    </div>
    <div className={styles.optionInfo__text}>
      <h1>{heading}</h1>
      <p>{subText}</p>
    </div>
  </div>;
};

export default OptionInfo;
