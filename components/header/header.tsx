import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.brand}>carlcidromero</span>
      </Link>
      <div>
        <Link href="/">home</Link>
        <span> | </span>
        <Link href="/vim">vim</Link>
      </div>
    </header>
  );
};

export default Header;
