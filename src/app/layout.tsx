import type { Metadata } from "next";
import "../scss/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VerticalContainer from "@/components/VerticalContainer";
import { PT_Sans_Narrow } from "next/font/google";
import NavigationMobile from "@/components/NavigationMobile";

const ptSansNarrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-pt-sans-narrow",
});

export const metadata: Metadata = {
  title: "Barbeshop",
  description:
    "Cовременный барбершоп для мужчин, где сочетаются классические стрижки и актуальные тренды. Профессиональные барберы, индивидуальный подход, стрижка бороды и усов, камуфляж седины и уход за волосами. Удобная онлайн-запись, стильная атмосфера и качественный сервис по разумной цене",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={ptSansNarrow.variable}>
        <VerticalContainer>
          <Header />
          {children}
          <NavigationMobile />
          <Footer />
        </VerticalContainer>
      </body>
    </html>
  );
}
