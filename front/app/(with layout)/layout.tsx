import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import "../styles/null.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online mag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
