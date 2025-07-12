import "./projects.scss";
import AllProjects from "@/components/AllProjects/AllProjects";
import InterestedInMyProfile from "@/components/InterestedInMyProfile/InterestedInMyProfile";

export default function Projects() {
    return (
        <>
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