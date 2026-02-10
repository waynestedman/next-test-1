// Annotations & Notes page
"use client";

import WButton from "../components/WButton";
import styles from './annotations.module.css';

function Annotations() {

  return (
    <div className={"page " + styles.annotationsPage}>
      <h3>Annotations & Notes</h3>
      <p>Select a model to annotate.</p>
      <form>
        <label>
          Model Name:
          <input type="text" name="modelName" />
        </label>
        <br />
        <label>
          Annotation:
          <textarea name="annotation" />
        </label>
      </form>
      <WButton 
        label="Annotation complete"
        onClick={() => alert("Model annotations and notes completed!")}></WButton>
    </div>
  )
}

export default Annotations;