"use client";
import { useRef, useEffect } from "react";
import useToggleMenu from "@/stores/useToggleMenu";

type VerticalContainerProps = {
  children: React.ReactNode;
};

export default function VerticalContainer({
  children,
}: VerticalContainerProps) {
  const { isToggled, close } = useToggleMenu();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isToggled && contentRef.current) {
        const target = event.target as HTMLElement;
        const isBurgerMenu = target.closest(".burger-menu");
        const isNavigation = target.closest(".navigation_mobile");

        if (!isBurgerMenu && !isNavigation) {
          close();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isToggled, close]);

  return (
    <div ref={contentRef} className="vertical-container">
      {children}
    </div>
  );
}
