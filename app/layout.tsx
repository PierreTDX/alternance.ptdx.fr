import "./../styles/globals.scss";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";

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
  title: "Pierre Tondeux Développeur Full Stack",
  description:
    "Pierre TONDEUX, Développeur Full Stack motivé à rejoindre une équipe en alternance dans le cadre d’un Mastère Expert en Développement Full Stack. Technologies : React, Javascript, TypeScript, Node.js, NestJS. Disponible dès maintenant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={monaSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1f1d1d" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Balises Open Graph Facebook */}
        <meta property="og:title" content="Pierre Tondeux Dev Full Stack" />
        <meta property="og:description" content="Pierre TONDEUX, Développeur Full Stack motivé à rejoindre une équipe en alternance dans le cadre d’un Mastère Expert en Développement Full Stack. Technologies : React, Javascript, TypeScript, Node.js, NestJS. Disponible dès maintenant." />
        <meta property="og:image" content="https://alternance.ptdx.fr/images/alternanceptdx.png" />
        <meta property="og:image:alt" content="Développeur full stack sur alternance.ptdx.fr de Pierre Tondeux" />
        <meta property="og:url" content="https://alternance.ptdx.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pierre Tondeux | Développeur Full Stack" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="fb:app_id" content="751029370648279" />

        {/* Balises Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pierre Tondeux Dev Full Stack" />
        <meta name="twitter:description" content="Pierre TONDEUX, Développeur Full Stack motivé à rejoindre une équipe en alternance dans le cadre d’un Mastère Expert en Développement Full Stack. Technologies : React, Javascript, TypeScript, Node.js, NestJS. Disponible dès maintenant." />
        <meta name="twitter:image" content="https://alternance.ptdx.fr/images/alternanceptdx.png" />
        <meta name="twitter:image:alt" content="Développeur Full Stack – alternance.ptdx.fr de Pierre Tondeux" />

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

        {/* schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://alternance.ptdx.fr#website",
                  "url": "https://alternance.ptdx.fr",
                  "name": "Pierre Tondeux Dev Full Stack",
                  "inLanguage": "fr"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://alternance.ptdx.fr#webpage",
                  "url": "https://alternance.ptdx.fr",
                  "name": "Accueil - Pierre Tondeux",
                  "description": "Développeur Full Stack en recherche d’une alternance dans le cadre d’un Mastère Expert en Développement Full Stack. Technologies : React, TypeScript, Node.js, NestJS.",
                  "inLanguage": "fr",
                  "isPartOf": {
                    "@id": "https://alternance.ptdx.fr#website"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://alternance.ptdx.fr#person",
                  "name": "Pierre Tondeux",
                  "url": "https://alternance.ptdx.fr",
                  "image": "https://alternance.ptdx.fr/images/alternanceptdx.png",
                  "sameAs": [
                    "https://github.com/PierreTDX",
                    "https://www.linkedin.com/in/pierre-tondeux/"
                  ],
                  "jobTitle": "Développeur Full Stack",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance"
                  },
                  "description": "Développeur Full Stack en recherche d’une alternance dans le cadre d’un Mastère Expert en Développement Full Stack. Technologies : React, TypeScript, Node.js, NestJS.",
                  "email": "mailto:pierre.tondeux@gmail.com"
                }
              ]
            }),
          }}
        ></script>

      </head>
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}