import React from "react";
import styles from "../styles/TopBanner.module.scss";

function TopBanner() {
  return (
    <>
      <div>
        <h1>
          Start and Build Your Crypto Portfolio Here Only at CryptoCap, you can
          build a good portfolio and learn best practices about cryptocurrency.
          Get Started
        </h1>
        <p>
          Start and Build Your Crypto Portfolio Here Only at CryptoCap, you can
          build a good portfolio and learn best practices about cryptocurrency.
          Get Started
        </p>
        <button>Get Started</button>
      </div>
      <div className={styles.hero_right}></div>
    </>
  );
}

export default TopBanner;
