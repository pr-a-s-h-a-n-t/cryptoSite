import React from "react";
import styles from "../styles/TopBanner.module.scss";

function TopBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_left}>
        <h1>Start and Build Your Crypto Portfolio Here</h1>
        <p>
          Only at CryptoCap, you can build a good portfolio and learn best
          practices about cryptocurrency.
        </p>
        <button>Get Started</button>
      </div>
      <div className={styles.hero_right}></div>
    </div>
  );
}

export default TopBanner;
