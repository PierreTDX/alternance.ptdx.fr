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
            "Application bancaire sécurisée développée en React et Redux. Elle permet aux utilisateurs de gérer leurs comptes, consulter leurs transactions, et modifier leurs informations personnelles avec une interface claire et moderne. L’authentification utilise des tokens JWT pour garantir la sécurité.",
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
            "Application de suivi sportif qui affiche des statistiques personnalisées (sessions, calories, performances). Elle utilise React avec la bibliothèque Recharts pour des graphiques interactifs, connectée à une API backend que j'ai déployée pour fournir les données en temps réel.",
        image: "/images/Projects/sportsee.png",
        tags: ["React", "Recharts", "API REST", "Sccs"],
        github: "https://github.com/PierreTDX/P12_SportSee_FRONT_OC",
        site: "https://p12-sport-see-oc.vercel.app/",
        date: "2025-06-02",
    },
    {
        id: 3,
        title: "Les Petits Plats",
        slug: "les-petits-plats",
        description:
            "Site de recettes de cuisine permettant la recherche dynamique de plats selon différents critères. Développé en JavaScript (HTML/CSS/JS), il intègre un algorithme de filtrage efficace pour retrouver rapidement une recette adaptée à ses envies.",
        image: "/images/Projects/lespetitsplats.png",
        tags: ["Javascript", "Html", "Css"],
        github: "https://github.com/PierreTDX/P7_lesPetitsPlats_OC",
        site: "https://p7-les-petits-plats-oc.vercel.app/",
        date: "2025-06-01",
    },
    {
        id: 4,
        title: "Kasa",
        slug: "kaza",
        description:
            "Plateforme de location immobilière avec un design responsive réalisée en React et React Router. Les utilisateurs peuvent consulter les annonces, voir les détails des logements et naviguer facilement entre les différentes pages.",
        image: "/images/Projects/lespetitsplats.png",
        tags: ["xxx", "xxxx", "xxxxx"],
        github: "https://github.com/PierreTDX/P11_Kasa_OC",
        site: "https://p11-kasa-oc.vercel.app/",
        date: "2025-05-31",
    }, {
        id: 5,
        title: "HRnet",
        slug: "hrnet",
        description:
            "Application de gestion des ressources humaines qui permet d’ajouter et de lister des employés. Développée en React avec un formulaire de création d’employé et un tableau de visualisation, elle facilite la gestion interne du personnel.",
        image: "/images/Projects/lespetitsplats.png",
        tags: ["xxx", "xxxx", "xxxxx"],
        github: "https://github.com/PierreTDX/P14_HRnet_OC",
        site: "https://p14-hrnet-oc.vercel.app/",
        date: "2025-05-30",
    },
];