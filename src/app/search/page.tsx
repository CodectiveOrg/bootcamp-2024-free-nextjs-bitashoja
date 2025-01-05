import React from "react";
import styles from "./page.module.css";
export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}></div>
      <div className={styles.box}></div>
    </div>
  );
}
