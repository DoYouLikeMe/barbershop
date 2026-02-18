"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  loginButton?: boolean;
};

export default function NavigationLink({
  href,
  children,
  loginButton,
}: NavigationLinkProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={clsx("navigation__link", {
        navigation__link_active: isActive,
        navigation_login: loginButton,
      })}
    >
      {children}
    </Link>
  );
}
