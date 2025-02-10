import Link from "next/link";
import s from "./gnb.module.scss";

export default function GlobalNavigationBar() {
  return (
    <header className={s.test}>
      <Link href="/">GlobalNavigationBar</Link>
    </header>
  );
}
