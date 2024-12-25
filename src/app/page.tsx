import GlobalSearchBox from "./components/header/global-search-box/globalSearchBox";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>دکتر موون</h1>
      <GlobalSearchBox />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
