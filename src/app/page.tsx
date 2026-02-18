import MainLogo from "@/components/MainLogo";
import Container from "@/components/Container";
import Features from "@/components/Features";
import PaperBlock from "@/components/PaperBlock";

import NewsPreview from "@/components/NewsPreview";
import MainSwiper from "@/components/MainSwiper";
import ContactInfo from "@/components/ContactInfo";
import AppointmentFormInfo from "@/components/AppointmentFormInfo";
export default function Home() {
  return (
    <main className="main-bg">
      <Container>
        <MainLogo />
        <Features />
        <PaperBlock>
          <NewsPreview />
          <MainSwiper />
        </PaperBlock>
        <PaperBlock>
          <ContactInfo />
          <AppointmentFormInfo />
        </PaperBlock>
      </Container>
    </main>
  );
}
