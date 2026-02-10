// edits page
"use client";

import WButton from "../components/WButton";
import styles from './edits.module.css';

function Edits() {

  return (
    <div className={"page " + styles.editsPage}>
      <h3>Model Editing Tool</h3>
      <p>Select a model to edit.</p>
      <WButton 
        label="Editing complete"
        onClick={() => alert("Model(s) editing complete!")}></WButton>
    </div>
  )
}

export default Edits;