import Container from "./Container";
import Social from "./Social";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__row">
          <div className="footer__cell">
            <div className="footer__paragraph">
              барбершоп «бородинский»
              <br />
              адрес: г. санкт-петербург, ул. б. конюшенная, д. 19/8
              <br />
              как нас найти?
              <br />
              телефон: +7 (495) 666-02-66
            </div>
          </div>
          <div className="footer__cell">
            <div className="footer__paragraph">Давайте дружить</div>
            <Social />
          </div>
          <div className="footer__cell">
            <div className="footer__paragraph">Разработано:</div>
            <Button href="https://htmlacademy.ru/">htmlacademy.ru</Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
