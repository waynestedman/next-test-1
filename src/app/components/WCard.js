// custom card component
"use client";

import WButton from "./WButton";
import styles from "./wcard.module.css";

function WCard(props) {
  return (
    <div className={`${styles["w-card"]} ${props.className}`}>
      {props.children}
      <header className={`${styles["w-card-header"]} ${props.headerClass}`}>
        <h3 className={`${styles["w-card-title"]}`}>{props.title}</h3>
      </header>
      <div className={`${styles["w-card-content"]}`}>
        <p className={`${styles["w-card-body"]} ${props.bodyClass}`}>
          {props.body}
        </p>
      </div>
      <div className={`${styles["button-container"]}`}>
        <WButton className={`${styles["win-button"]}`} label="Click to Win!" onClick={() => {
          console.log("Click to Win Button has been clicked!");
          }}>
        </WButton>
        <WButton className={`${styles["go-back-button"]}`} label="Go Back" onClick={() => {
          console.log("Go Back button has been clicked");
        }}></WButton>
      </div>
    </div>
  );
}

export default WCard;