import "./projects.scss";
import AllProjects from "@/components/AllProjects/AllProjects";

export default function Projects() {
    return (
        <>
            <section className="projects">
                <div className="sectionContent projectsContent">
                    <AllProjects />
                </div>
            </section>
        </>
    );
}