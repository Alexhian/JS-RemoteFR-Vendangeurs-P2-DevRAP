import React from "../assets/React.svg";
import css3 from "../assets/css3.svg";
import github from "../assets/github.svg";
import html5 from "../assets/html5.svg";
import linkedin from "../assets/linkedin.svg";
import logo3 from "../assets/logo3.png";
import datas from "../datas/datas.json";
import type { Urls } from "../lib/definition";
import styles from "./Footer.module.css";

function Footer() {
  const urlArray: Urls = datas;

  function handleClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <footer>
      <div className={styles.footerContener}>
        <div className={styles.firstLineFooter}>
          <img id={styles.logoFooter} src={logo3} alt="logo" />
          <p>© 2024 DevRAP All rights reserved.</p>
        </div>
        <div className={styles.collaborateurs}>
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.raph}
          >
            Raphaël RIVIERE
          </a>{" "}
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.alex}
          >
            {" "}
            Alexandre HIANCE
          </a>{" "}
          <a
            className={styles.collabRef}
            target="_blank"
            rel="noopener noreferrer"
            href={urlArray.pangsui}
          >
            Pangsui LINGE USIFU{" "}
          </a>
        </div>
        <div className={styles.socialMedia}>
          <img
            src={linkedin}
            alt="linkedin"
            width="15%"
            onClick={() => handleClick(urlArray.linkedin)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.linkedin);
              }
            }}
          />
          <img
            src={github}
            alt="github"
            width="15%"
            onClick={() => handleClick(urlArray.github)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.github);
              }
            }}
          />
          <img
            src={React}
            alt="react"
            onClick={() => handleClick(urlArray.react)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.react);
              }
            }}
          />
          <img
            src={css3}
            alt="CSS"
            width="15%"
            onClick={() => handleClick(urlArray.css3)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.css3);
              }
            }}
          />
          <img
            src={html5}
            alt="html"
            width="15%"
            onClick={() => handleClick(urlArray.html5)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(urlArray.html5);
              }
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
