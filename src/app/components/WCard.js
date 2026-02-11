// custom card component
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import WButton from "./WButton";
import styles from "./wcard.module.css";

function WCard(props) {
  const router = useRouter();
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
      <div className={`${styles["w-card-image"]} ${props.imageClass}`}>
        {props.image && <Image src={props.image} alt={props.alt || ""} width={300} height={200} />}
      </div>
      <div className={`${styles["button-container"]}`}>
        <WButton className={`${styles["modelViewButton"]}`} label="View model" onClick={() => {
          router.push("/modelViewer");
          }}>
        </WButton>
        <WButton className={`${styles["go-back-button"]}`} label="Send Back to Design" onClick={() => {
          alert("Model has been sent back to design!");
        }}></WButton>
      </div>
    </div>
  );
}

export default WCard;