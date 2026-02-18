import HeaderLogo from "./HeaderLogo";
import Container from "./Container";
import LoginButton from "./LoginButton";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__row">
          <HeaderLogo />
          <Navigation />
          <LoginButton />
          <BurgerMenu />
        </div>
      </Container>
    </header>
  );
}
