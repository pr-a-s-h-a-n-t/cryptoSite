import React from "react";
import styles from "../styles/Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerData = [
  {
    title: "About Us",
    links: [
      {
        title: "About",
        links: "",
      },
      {
        title: "Careers",
        links: "",
      },
      {
        title: "Blog",
        links: "",
      },
      {
        title: "Legal & Privacy",
        links: "",
      },
    ],
  },

  {
    title: "Services",
    links: [
      {
        title: "Applications",
        links: "",
      },
      {
        title: "Buy Crypto",
        links: "",
      },
      {
        title: "Affiliate ",
        links: "",
      },
      {
        title: "Institutional Services",
        links: "",
      },
    ],
  },

  {
    title: "Learn",
    links: [
      {
        title: "What is cryptocurrency?",
        links: "",
      },
      {
        title: "Crypto basics",
        links: "",
      },
      {
        title: "Tips & tutorials",
        links: "",
      },
      {
        title: "Market updates",
        links: "",
      },
    ],
  },
];

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <h3>
          Crypto<span>Cap</span>{" "}
        </h3>
        <div>
          <div className={styles.icn}>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>

          <p>2021 CoinMarketCap. All rights reserved</p>
        </div>
      </div>
      <div className={styles.footer_links}>
        {footerData.map((data, index) => (
          <div key={index}>
            <h3>{data.title}</h3>
            <ul>
              {data.links.map((link, index) => (
                <li key={index}>{link.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
