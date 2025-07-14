import "./projects.scss";
import AllProjects from "@/components/AllProjects/AllProjects";
import InterestedInMyProfile from "@/components/InterestedInMyProfile/InterestedInMyProfile";

export default function Projects() {
    return (
        <>
            <section className="headTitle">
                <h1>
                    Mes <span className="important">Projets</span>
                </h1>
                <h2>
                    Découvrez une sélection de mes réalisations techniques, alliant créativité et expertise en développement web
                </h2>
            </section>
            <section className="projects">
                <div className="sectionContent projectsContent">
                    <AllProjects />
                </div>
            </section>
            <section className="interestedInMyProfile">
                <div className="sectionContent interestedInMyProfileContent">
                    <InterestedInMyProfile />
                </div>
            </section>
        </>
    );
}