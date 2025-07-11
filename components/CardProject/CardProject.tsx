"use client";
import "./cardProject.scss";
import Image from "next/image";
import { Project } from "../../data/projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

type Props = {
    project: Project;
};

export default function CardProject({ project }: Props) {
    const handleCardClick = () => {
        window.open(project.site, "_blank");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
        }
    };

    return (
        <article
            className="cardProject"
            role="link"
            tabIndex={0}
            aria-labelledby={`project-title-${project.id}`}
            aria-describedby={`project-description-${project.id}`}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
        >
            <div className="cardImageWrapper">
                <Image
                    src={project.image}
                    alt={`Capture d'écran du projet ${project.title}`}
                    width={400}
                    height={200}
                    className="cardImage"
                />
            </div>
            <h3 id={`project-title-${project.id}`}>{project.title}</h3>
            <p id={`project-description-${project.id}`}>{project.description}</p>

            <ul className="tags" aria-label="Technologies utilisées">
                {project.tags.map((tag, index) => (
                    <li key={index} className="tag">
                        {tag}
                    </li>
                ))}
            </ul>

            <div className="cardLinks">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code source de ${project.title} sur GitHub, dans une autre fenêtre`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <IoLogoGithub size={28} role="presentation" />
                </a>
                <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site"
                    aria-label={`Visiter le site ${project.title}, dans une autre fenêtre`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaExternalLinkAlt size={24} role="presentation" />
                </a>
            </div>
        </article>
    );
}