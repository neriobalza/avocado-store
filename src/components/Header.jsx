import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./header.module.css";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" && styles.active}`}
        >
          <Image
            src="/images/avocado-1.png"
            alt="avocado store icon"
            priority
            width={36}
            height={36}
          />
          Store
        </Link>

        <Link
          href="/cart"
          className={`${styles.link} ${pathname === "/cart" && styles.active}`}
        >
          <Image
            src="/images/basket-1.png"
            alt="avocado store icon"
            width={36}
            height={36}
          />
          Basket (0)
        </Link>
      </nav>
    </header>
  );
};

export default Header;
