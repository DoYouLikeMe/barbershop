import InnerPage from "@/components/InnerPage";
import Container from "@/components/Container";
import H1 from "@/components/H1";
import Breadcrumbs from "@/components/Breadcrumbs";
import SecondaryTitle from "@/components/SecondaryTitle";

export default function priceListPage() {
  return (
    <InnerPage>
      <Container>
        <H1>Прайс-лист</H1>
        <Breadcrumbs
          path={[{ name: "Главная", linkPath: "/" }, { name: "Прайс-лист" }]}
        />
        <SecondaryTitle>Истинно Мужская Стрижка</SecondaryTitle>
      </Container>
    </InnerPage>
  );
}
