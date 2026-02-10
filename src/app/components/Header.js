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
          Library (Home)
        </Link>
        <Link href="/modelViewer" className={pathname === "/modelViewer" ? styles.active : ""}>
          Model Viewer
        </Link>
        <Link href="/annotations" className={pathname === "/annotations" ? styles.active : ""}>
          Annotations & Notes
        </Link>
        <Link href="/edits" className={pathname === "/edits" ? styles.active : ""}>
          Model Editing Tool
        </Link>
        <Link href="/production" className={pathname === "/production" ? styles.active : ""}>
          Production
        </Link>
      </nav>
    </header>
  );
};

export default Header;