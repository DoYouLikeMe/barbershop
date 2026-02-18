"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import useToggleMenu from "@/stores/useToggleMenu";

export default function BurgerMenu() {
  const { toggle, isToggled } = useToggleMenu();

  return (
    <FontAwesomeIcon
      onClick={toggle}
      className="burger-menu"
      size="1x"
      icon={isToggled ? faTimes : faBars}
    />
  );
}
