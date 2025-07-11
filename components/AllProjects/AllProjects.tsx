import "./allProjects.scss";
import CardProject from "../CardProject/CardProject";
import { projectsData } from "@/data/projectsData";


export default function AllProjects() {
    const sortedProjects = [...projectsData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // tri décroissant

    return (
        <>
            <div className="articleAllProjects" aria-label="Tous mes Projets">
                <div>
                    <h1>
                        Mes <span className="important">Projets</span>
                    </h1>
                    <h2>
                        Découvrez une sélection de mes réalisations techniques, alliant créativité et expertise en développement web
                    </h2>
                </div>
                <div className="listAllProjects">
                    {sortedProjects.map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}