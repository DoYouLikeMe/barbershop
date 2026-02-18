import NavigationLink from "./NavigationLink";
import { headerNavRoutes } from "@/utils/routes";

type NavigationProps = {
  behaviour?: string;
  handleMenuToggle?: () => void;
};

export default function Navigation({
  behaviour = "static",
  handleMenuToggle,
}: NavigationProps) {
  return (
    <nav
      onClick={handleMenuToggle}
      className={`navigation ${behaviour ? `navigation_${behaviour}` : ""}`}
    >
      <ul
        className={`navigation__list ${behaviour ? `navigation__list_${behaviour}` : ""}`}
      >
        {headerNavRoutes.map((route) => {
          return (
            <li key={route.path} className="navigation__item">
              <NavigationLink href={route.path}>{route.name}</NavigationLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
