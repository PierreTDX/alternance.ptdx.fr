import "./../styles/globals.scss";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Déclaration de Mona Sans
const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mona", // nom de la variable CSS
});

export const metadata = {
  title: "Pierre Tondeux Dev Full Stack",
  description: "Recherche alternance pour Mastère Expert en Développement Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={monaSans.variable}>
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}