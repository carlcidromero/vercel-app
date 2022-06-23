import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.brand}>carlcidromero</span>
      </Link>
      <div className={styles.pages}>
        <Link href="/about">about</Link>
        <Link href="/vim">vim</Link>
      </div>
    </header>
  );
};

export default Header;
