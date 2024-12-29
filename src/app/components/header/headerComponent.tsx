"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

const navLinks = [
  { href: "/", label: "خانه", className: styles.active },
  { href: "/search", label: "جستجو", className: styles.search },
];

export default function HeaderComponent() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(pathname === link.href && link.className)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود |ثبتنام</button>
    </header>
  );
}
