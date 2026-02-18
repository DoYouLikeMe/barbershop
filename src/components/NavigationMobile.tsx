"use client";

import Navigation from "./Navigation";
import useToggleMenu from "@/stores/useToggleMenu";

export default function NavigationMobile() {
  const { isToggled, close } = useToggleMenu();

  if (isToggled) {
    return <Navigation handleMenuToggle={close} behaviour="mobile" />;
  }
}
