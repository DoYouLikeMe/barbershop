import InnerPage from "@/components/InnerPage";
import Container from "@/components/Container";
import H1 from "@/components/H1";
import Breadcrumbs from "@/components/Breadcrumbs";
import SecondaryTitle from "@/components/SecondaryTitle";
import H3 from "@/components/H3";
import ContentList from "@/components/ContentLists";

export default function priceListPage() {
  return (
    <InnerPage>
      <Container>
        <H1>Прайс-лист</H1>
        <Breadcrumbs
          path={[{ name: "Главная", linkPath: "/" }, { name: "Прайс-лист" }]}
        />
        <SecondaryTitle>Истинно Мужская Стрижка</SecondaryTitle>
        <div className="content-row">
          <div className="content-column">
            <H3>
              Мы используем только
              <br />
              лучшие средства
            </H3>
            <ContentList>
              <li>Baxter of California</li>
              <li>Mr Natty</li>
              <li>Suavecito</li>
              <li>Malin+Goetz</li>
            </ContentList>
          </div>
          <div className="content-column">
            <H3>
              Цены на услуги
              <br />
              наших мастеров
            </H3>
            <table className="content-table">
              <tbody>
                <tr>
                  <td>Стрижка</td>
                  <td>1500 ₽</td>
                </tr>
                <tr>
                  <td>Стрижка бороды</td>
                  <td>500 ₽</td>
                </tr>
                <tr>
                  <td>Накрутка усов</td>
                  <td>350 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <H3>Несколько слов о нас:</H3>
        <div className="content-row">
          <div className="content-column">
            <p className="r-width-382">
              Наша парикмахерская занимается исключительно мужскими стрижками.
              Стрижка каждого клиента для нас - это уникальная и продуманная до
              мелочей работа. Мы не работаем на количество, мы делаем качество.
            </p>
          </div>
          <div className="content-column">
            <p className="r-width-425">
              Наша мастерская расположена в центре города, поэтому сделать
              стильную стрижку можно в любое время, даже в обеденный перерыв.
              Здесь вы можете погрузиться в удобную для вас атмосферу,
              чувствовать себя комфортно и свободно!
            </p>
          </div>
        </div>
      </Container>
    </InnerPage>
  );
}
