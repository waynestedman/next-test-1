// production page
"use client";

import WButton from "../components/WButton";
import styles from './production.module.css';

function Production() {

  return (
    <div className={"page " + styles.productionPage}>
      <h3>Send to Production</h3>
      <div className={styles.selectionList}>
        <h5>Selection which models you would like to send into production.</h5>
        <div className={styles.checkboxList}>
          <label><input type="checkbox" name="models" value="bolt" /> Bolt</label>
          <label><input type="checkbox" name="models" value="housing" /> Housing</label>
          <label><input type="checkbox" name="models" value="gear" /> Gear</label>
          <label><input type="checkbox" name="models" value="assembly" /> Assembly</label>
        </div>
      </div>
      <WButton 
        label="Send to Production"
        onClick={() => alert("Model(s) sent to production!")}></WButton>
    </div>
  )
}

export default Production;