// production page
"use client";

import WButton from "../components/WButton";
import styles from './production.module.css';

function Production() {

  return (
    <div className={"page " + styles.productionPage}>
      <h3>Production</h3>
      <p>Click to send these models into production.</p>
      <WButton 
        label="Send to Production"
        onClick={() => alert("Model(s) sent to production!")}></WButton>
    </div>
  )
}

export default Production;