// site header
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.logo} ${pathname === "/" ? styles.active : ""}`}>
          Site
        </Link>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
          About
        </Link>
        <Link href="/blog" className={pathname === "/blog" ? styles.active : ""}>
          Blog
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;