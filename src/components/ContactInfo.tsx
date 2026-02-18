import Button from "./Button";
export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className="paper-block__title">Контактная информация</h2>
      <p className="paper-block__paragraph">
        Барбершоп «Бородинский»
        <br />
        Адрес: г. Санкт-Петербург, Б. Конюшенная, д. 19/8
        <br />
        Телефон: +7 (495) 666-02-66
      </p>
      <p className="paper-block__paragraph">
        Время работы:
        <br />
        ПН — ПТ: с 10:00 до 22:00
        <br />
        ПТ — ВС: с 10:00 до 19:00
      </p>
      <div className="buttons-row">
        <Button>Как проехать</Button>
        <Button>Обратная связь</Button>
      </div>
    </div>
  );
}
