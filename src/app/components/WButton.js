// custom button
"use client";

import styles from "./wbutton.module.css";

function WButton(props) {
    return (
      <button className={`${styles["w-button"]} ${props.className}`} onClick={() => { console.log("W Button clicked!"); props.onClick?.(); }}>
        {props.label}
      </button>
    );
}

export default WButton;