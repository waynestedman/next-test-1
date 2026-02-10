// Model Viewer page
"use client";

import { useEffect } from 'react';
import styles from './modelViewer.module.css';

function ModelViewer() {

  useEffect(() => {
    import('./ThreeFile.js');
  }, []);

  return (
    <div className={"page " + styles.modelViewerPage}>
      <h3>Model Viewer</h3>
      <div id="threeroot"></div>
    </div>
  )
}

export default ModelViewer;