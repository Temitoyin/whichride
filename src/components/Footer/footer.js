import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__heading}>
          <h1>Sign up to our beta form</h1>
          <p>
            Sign up to our mailing list to find out more information and keep up
            to date about our activities
          </p>
        </div>
        <div className={styles.footer__emailSubscription}>
          <input type="email" placeholder="email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>© 2020 Whichride - All rights reserved.</p>
        <div className={styles.footer__bottom_right}>
          <p> Privacy Policy </p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
