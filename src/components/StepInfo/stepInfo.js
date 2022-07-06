import React from "react";
import styles from "./stepInfo.module.scss";
const StepInfo = ({step, heading, subText}) => {
  return <div className={styles.stepInfo} id="rideInfoItem">
    <div className={styles.stepInfo__step}>{`Step ${step}`}</div>
    <div className={styles.stepInfo__text}>
      <h1>{heading}</h1>
      <p>{subText}</p>
    </div>
  </div>;
};

export default StepInfo;
