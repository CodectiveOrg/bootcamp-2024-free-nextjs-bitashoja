"use client";

import React from "react";
import Image from "next/image";
import errorImage from "@/assets/illustrations/error.png";
import styles from "./error.module.css";
type Props = {
  error: Error & { digest: string };
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>بدبخت شدیم!</div>
        <h1>متاسفانه مشکلی پیش آمد</h1>
        <p>لطفا با تیم پشتیبانی تماس بگیرید</p>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="error" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
      <div className={styles.trace}>
        <summary>لاگ خطا</summary>
        <pre dir="ltr">{error.stack}</pre>
      </div>
    </div>
  );
}
