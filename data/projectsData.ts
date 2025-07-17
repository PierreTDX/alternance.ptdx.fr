export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    site: string;
    date: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Argent Bank",
        slug: "argent-bank",
        description:
            "Application web bancaire développée avec React et Redux, permettant aux utilisateurs de s’authentifier, gérer leur profil et consulter leurs informations personnelles. J’ai déployé l'API backend pour l’échange sécurisé des données via des appels HTTP, JWT. L’interface responsive est conçue à partir de maquettes fournies, avec une attention portée à la gestion globale du state et à la sécurisation des accès utilisateurs. J’ai également participé à la spécification d’une future API pour la gestion des transactions.",
        image: "/images/Projects/argentbank.png",
        tags: ["React", "Redux", "Jwt", "API REST"],
        github: "https://github.com/PierreTDX/P13_ArgentBank_FRONT_OC",
        site: "https://p13-argentbank-oc.vercel.app/",
        date: "2025-06-03",
    },
    {
        id: 2,
        title: "SportSee",
        slug: "sportsee",
        description:
            "Application de suivi sportif affichant des statistiques personnalisées (sessions, calories, performances) développée avec React et la bibliothèque Recharts pour des graphiques interactifs. Connectée à une API backend que j’ai déployée, elle récupère les données en temps réel via un service Axios dédié. Le projet respecte les maquettes Figma et se concentre sur une expérience desktop optimisée, avec une standardisation des données et une documentation soignée.",
        image: "/images/Projects/sportsee.png",
        tags: ["React", "Recharts", "API REST", "Axios", "Scss", "Figma"],
        github: "https://github.com/PierreTDX/P12_SportSee_FRONT_OC",
        site: "https://p12-sport-see-oc.vercel.app/user/12",
        date: "2025-06-02",
    },
    {
        id: 3,
        title: "Les Petits Plats",
        slug: "les-petits-plats",
        description:
            "Site de recettes de cuisine permettant la recherche dynamique de plats selon différents critères. Développé en JavaScript (HTML/CSS/JS), il intègre un algorithme de filtrage efficace pour retrouver rapidement une recette adaptée à ses envies. Interface accessible, responsive et conforme W3C. Code modulaire, sécurisé, sans librairie JS externe.",
        image: "/images/Projects/lespetitsplats.png",
        tags: ["Javascript", "Html", "Css", "JSON"],
        github: "https://github.com/PierreTDX/P7_lesPetitsPlats_OC",
        site: "https://p7-les-petits-plats-oc.vercel.app/",
        date: "2025-06-01",
    },
    {
        id: 4,
        title: "Kasa",
        slug: "kaza",
        description:
            "Développement de la nouvelle interface du site Kasa en React avec React Router. Intégration complète des maquettes Figma (responsive) et des composants dynamiques (galerie, collapses). Données simulées via un fichier JSON. Respect des guidelines techniques, utilisation de Sass pour le style et animation du menu déroulant. Application modulaire et conforme aux standards qualité.",
        image: "/images/Projects/kasa.png",
        tags: ["React", "Figma", "JSON", "Sass"],
        github: "https://github.com/PierreTDX/P11_Kasa_OC",
        site: "https://p11-kasa-oc.vercel.app/",
        date: "2025-05-31",
    },
    {
        id: 5,
        title: "HRnet",
        slug: "hrnet",
        description:
            "Migration complète de l’application interne HRnet d’une architecture jQuery vers React afin d’améliorer ses performances et sa maintenabilité. Conversion d’un plugin jQuery critique en composant React fonctionnel, modulaire et accessible, avec création d’un système de gestion d’état moderne. Réalisation de tests de performance comparatifs avec Lighthouse pour mesurer les gains. Gestion globale du state avec Zustand",
        image: "/images/Projects/hrnet.png",
        tags: ["React", "jQuery", "Zustand"],
        github: "https://github.com/PierreTDX/P14_HRnet_OC",
        site: "https://p14-hrnet-oc.vercel.app/",
        date: "2025-05-30",
    },
    {
        id: 6,
        title: "Modal",
        slug: "ptdxmodal",
        description:
            "@ptdx/modal est un composant React de modale personnalisable, publié sur npm, conçu pour être facilement intégré et accessible. Il respecte les bonnes pratiques WAI-ARIA, inclut la gestion du focus, la fermeture par touche Échap et le clic hors-modale. Le rendu s’effectue via React Portal pour une séparation claire du DOM. Léger et extensible, il propose plusieurs variantes visuelles (succès, erreur) et un style personnalisable via des classes CSS.",
        image: "/images/Projects/ptdxmodal.png",
        tags: ["React", "npm", "Acessibilité"],
        github: "https://github.com/PierreTDX/ptdx-modal",
        site: "https://www.npmjs.com/package/@ptdx/modal",
        date: "2025-04-30",
    },
    {
        id: 7,
        title: "FishEye",
        slug: "fisheye",
        description:
            "FishEye est un prototype de site accessible conçu pour une plateforme de photographes indépendants. Le projet consistait à développer, à partir de maquettes fournies, une page d’accueil et des pages dédiées à chaque photographe, en HTML, CSS et JavaScript vanilla. Les données étaient dynamiquement générées via un fichier JSON, avec une logique d'affichage basée sur le pattern Factory Method. L'accessibilité était une exigence centrale, avec une navigation clavier et un support lecteur d’écran soignés.",
        image: "/images/Projects/fisheye.png",
        tags: ["Javascript", "Html", "Css", "Figma", "JSON", "Acessibilité"],
        github: "https://github.com/PierreTDX/P6_FishEye_OC",
        site: "https://p6-fish-eye-oc.vercel.app/",
        date: "2025-04-30",
    },
    {
        id: 8,
        title: "SaaS RH chez Billed",
        slug: "billed",
        description:
            "Participation à la stabilisation et au test d’une fonctionnalité clé “note de frais” dans un SaaS RH chez Billed. Analyse, débogage et correction des parcours utilisateur administrateur et employé en front-end React. Mise en place de tests End-to-End pour garantir la fiabilité avant lancement. Collaboration avec l’équipe et utilisation d’outils comme Chrome Debugger et Kanban Notion pour suivre les bugs.",
        image: "/images/Projects/billed.png",
        tags: ["Jest", "tests End-to-End", "Débogage", "Chrome Debugger"],
        github: "https://github.com/PierreTDX/P9_Billed_FRONT_OC",
        site: "",
        date: "2025-04-30",
    },
    {
        id: 9,
        title: "Learn @ Home",
        slug: "learnathome",
        description:
            "Learn@Home est un projet de cadrage fonctionnel pour une application web de soutien scolaire. J’ai réalisé l’ensemble des livrables attendus avant développement : diagrammes de cas d’usage (connexion, chat, calendrier, tâches, tableau de bord), user stories avec critères d’acceptation, maquettes desktop/mobile (Figma), et découpage fonctionnel en Kanban. L’objectif était de structurer les besoins du client de manière claire et exploitable par une future équipe de développement.",
        image: "/images/Projects/learnathome.png",
        tags: ["Figma", "user stories", "diagrammes de cas d’usage", "Kanban"],
        github: "https://github.com/PierreTDX/P10_Learn_At_Home_OC",
        site: "https://www.figma.com/design/ZwSigWkx8lueDkLNK3hi5G/P10-Learn-Home?m=auto&t=ZCHpYSix8xWSlmTv-1",
        date: "2025-04-30",
    },
    {
        id: 10,
        title: "Game On",
        slug: "gameon",
        description:
            "GameOn – Landing Page : j’ai finalisé le développement front-end d’une page d’accueil avec formulaire d’inscription aux concours. En reprenant le projet existant, j’ai implémenté la logique JavaScript manquante pour rendre le formulaire pleinement fonctionnel (validation des champs, interactions, responsive).",
        image: "/images/Projects/gameon.png",
        tags: ["Javascript", "Html", "Css"],
        github: "https://github.com/PierreTDX/P4_GameOn_OC",
        site: "https://pierretdx.github.io/P4_GameOn_OC/",
        date: "2025-04-30",
    },
    {
        id: 11,
        title: "OhMyFood",
        slug: "ohmyfood",
        description:
            "OhMyFood – Site mobile-first avec animations CSS : j’ai développé un site responsive listant les menus de 4 restaurants gastronomiques pour la startup OhMyFood. En suivant des maquettes Figma, j’ai mis en œuvre une approche mobile first et intégré des animations CSS fluides (chargement, transitions, interactions) pour améliorer l’expérience utilisateur. Le projet a été réalisé en HTML, SCSS et CSS3, avec un soin particulier apporté au responsive design et aux détails visuels.",
        image: "/images/Projects/ohmyfood.png",
        tags: ["Html", "Css", "Sass"],
        github: "https://github.com/PierreTDX/P3_ohmyfood_OC",
        site: "https://pierretdx.github.io/P3_ohmyfood_OC/",
        date: "2025-04-30",
    },
    {
        id: 12,
        title: "Booki",
        slug: "booki",
        description:
            "Booki – Intégration HTML/CSS d’une page d’accueil responsive : dans le cadre de ma première mission chez OpenClassrooms, j’ai intégré la page d’accueil d’un site de recherche d’hébergements et d’activités. À partir de maquettes Figma et d’un brief technique, j’ai codé l’ensemble de l’interface en HTML5 et CSS3, en respectant les bonnes pratiques de structuration sémantique, de responsive design et de compatibilité multi-écrans. Le projet respecte une architecture de fichiers professionnelle, sans framework ni JavaScript.",
        image: "/images/Projects/booki.png",
        tags: ["Html", "Css", "Figma"],
        github: "https://github.com/PierreTDX/P2_booki_OC",
        site: "https://pierretdx.github.io/P2_booki_OC/",
        date: "2025-04-30",
    },
    {
        id: 13,
        title: "Alternance.ptdx.fr",
        slug: "alternanceptdx",
        description:
            "Site personnel développé avec Next.js pour présenter mon profil, mes projets et mon parcours. Design responsive, optimisations SEO et performance. Un formulaire de contact fonctionnel permet d’échanger directement, avec notifications automatiques via l’API Brevo. Hébergé sur Vercel avec nom de domaine personnalisé.",
        image: "/images/Projects/alternanceptdx.png",
        tags: ["Next.js", "React", "Scss", "Vercel", "Brevo"],
        github: "https://github.com/PierreTDX/alternance.ptdx.fr",
        site: "",
        date: "2025-07-15",
    },
    // {
    //     id: 14,
    //     title: "Titre projet",
    //     slug: "slugprojet",
    //     description:
    //         "Description du projet",
    //     image: "/images/Projects/projetweb.jpg",
    //     tags: ["xxx", "xxxx", "xxxxx"],
    //     github: "https://github.com/PierreTDX/",
    //     site: "https://",
    //     date: "2025-04-30",
    // },

];