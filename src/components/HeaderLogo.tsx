"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function HeaderLogo() {
  const path = usePathname();
  const isMainPage = path === "/";

  if (!isMainPage) {
    return (
      <Link href="/">
        <Image
          width={111}
          height={22}
          src="/images/header-logo.png"
          alt="Barbershop"
        />
      </Link>
    );
  }
}
