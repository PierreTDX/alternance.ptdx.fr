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
    return (
        <a href={project.site} target="_blank" rel="noopener noreferrer">

            <div className="cardProject">
                <div className="cardImageWrapper">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="cardImage"
                    />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags">
                    {project.tags.map((tag, index) => (
                        <li key={index} className="tag">
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className="cardLinks">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub size={28} />
                    </a>
                    <a href={project.site} target="_blank" rel="noopener noreferrer" className="site">
                        <FaExternalLinkAlt size={24} />
                    </a>
                </div>
            </div>
        </a>

    );
}