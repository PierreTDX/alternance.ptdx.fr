import "./../styles/globals.scss";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script"; // ⬅️ ajoute ceci

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
  variable: "--font-mona",
});

export const metadata = {
  title: "Pierre Tondeux Dev Full Stack",
  description:
    "Pierre TONDEUX recherche une alternance dans le cadre d'un Mastère Expert en Développement Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={monaSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1f1d1d" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Balise Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P01YGND3SM"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P01YGND3SM');
          `}
        </Script>
      </head>
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}