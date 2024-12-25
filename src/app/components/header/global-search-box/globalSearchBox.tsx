import React from "react";
import styles from "./globalSearchBox.module.css";
import MingcuteLocationLine from "@/icons/MingcuteLocationFill";
import MingcuteSearchLine from "@/icons/MingcuteSearch2Fill";
export default function GlobalSearchBox() {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input type="text" placeholder="نام بیماری ,تخصص, پزشک,بیمارستان و ..." />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button title="لوکیشن">
          <MingcuteLocationLine />
        </button>
      </div>
    </div>
  );
}
