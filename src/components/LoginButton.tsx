import NavigationLink from "./NavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoginButton() {
  return (
    <NavigationLink loginButton={true} href="login">
      <FontAwesomeIcon
        className="navigation__icon"
        size="1x"
        icon={faRightToBracket}
      />
      Войти
    </NavigationLink>
  );
}
