import React from "react";
import Icon from "../Icon/icon";
import styles from "./navigation.module.scss";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__logo} id="navItem">
      <Icon name="logo" />
      </div>
      <ul>
        <li id="navItem">The App</li>
        <li id="navItem">About Us</li>
        <li id="navItem">Get in Touch</li>
      </ul>
    </div>
  );
};

export default Navigation;
