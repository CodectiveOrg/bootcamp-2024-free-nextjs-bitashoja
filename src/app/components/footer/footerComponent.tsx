import React from "react";

import Link from "next/link";

// import idkLogo from "@/assets/logo/idk.svg";
// import certificateLego from "@/assets/logo/certificates.svg";
// import enamadLogo from "@/assets/logo/enamad.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";

import styles from "./footer.module.css";
export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر موون</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        {/* <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="idkLogo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLego} alt="certificateLogo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="enamadLogo" />
            </Link>
          </li>
        </ul> */}
        <ul className={styles.socials}>
          <li>
            <Link href="https://www.youtube.com/codective" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/codective" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/codective" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت , خدمات و محتوای مربوط به آن متعلق به
        من می باشد.
      </p>
    </footer>
  );
}
