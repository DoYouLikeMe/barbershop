"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

export default function HeaderLogo() {
  const path = usePathname();
  const isHiddenOnDesktop = path === "/";

  return (
    <Link
      className={clsx("main-logo", {
        "main-logo_hidden-desktop": isHiddenOnDesktop,
      })}
      href="/"
    >
      <Image
        width={111}
        height={22}
        src="/images/header-logo.png"
        alt="Barbershop"
      />
    </Link>
  );
}
