import Link from "next/link";
import styles from "./gnb.module.scss";

export default function GlobalNavigationBar() {
  return (
    <header className={styles.test}>
      <Link href="/">GlobalNavigationBar</Link>
    </header>
  );
}
