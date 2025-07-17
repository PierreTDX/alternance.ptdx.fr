'use client';
import "./recentProjects.scss";
import CardProject from "../CardProject/CardProject";
import { projectsData } from "@/data/projectsData";
import { FaArrowRight } from "react-icons/fa";

export default function RecentProjects() {
    // Filtrer pour exclure Alternance.ptdx
    const filteredProjects = projectsData.filter(
        project => project.slug !== "alternanceptdx"
    );

    const sortedProjects = [...filteredProjects]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // tri décroissant
        .slice(0, 3); // prend les 3 premiers

    return (
        <div className="articleRecentProjects" aria-label="Projets récents">
            <div>
                <h2>Projets récents</h2>
                <p>
                    Découvrez quelques-uns de mes projets qui démontrent mes compétences
                    techniques et ma créativité.
                </p>
            </div>

            <div className="listRecentProjects">
                {sortedProjects.map((project) => (
                    <CardProject key={project.id} project={project} />
                ))}
            </div>

            <button
                type="button"
                aria-label="Voir tous mes projets"
                onClick={() => { window.location.href = "/projets" }}
            >
                Voir tous mes projets <FaArrowRight aria-hidden="true" />
            </button>
        </div>
    );
}