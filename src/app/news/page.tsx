import Container from "@/components/Container";
import H1 from "@/components/H1";
import InnerPage from "@/components/InnerPage";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function NewsPage() {
  return (
    <InnerPage>
      <Container>
        <H1>Новости</H1>
        <Breadcrumbs
          path={[{ name: "Главная", linkPath: "/" }, { name: "Все новости" }]}
        />
      </Container>
    </InnerPage>
  );
}
