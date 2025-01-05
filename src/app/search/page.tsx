import React from "react";
import styles from "./page.module.css";
import CardComponent from "@/app/components/card/cardComponent";
import DoctorList from "../components/docters-list/doctersList";
export default function SearchPage() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className="title"> جنسیت پزشک</div>
          <button>خانم</button>
          <button>آقا</button>
        </CardComponent>
      </div>
      <div className={styles.box}>
        <DoctorList />
      </div>
    </div>
  );
}
