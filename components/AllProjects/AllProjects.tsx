import "./allProjects.scss";
import CardProject from "../CardProject/CardProject";
import { projectsData } from "@/data/projectsData";


export default function AllProjects() {
    const sortedProjects = [...projectsData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // tri décroissant

    return (
        <>
            <div className="articleAllProjects" aria-label="Tous mes Projets">
                <div className="listAllProjects">
                    {sortedProjects.map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}