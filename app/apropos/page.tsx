import "./apropos.scss";
import ReadyToCollaborateTogether from "@/components/ReadyToCollaborate/ReadyToCollaborateTogether";
import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";

export default function About() {
    return (
        <>
            <section>
                <h1>
                    À propos de <span className="important">moi</span>
                </h1>
                <p>
                    Découvrez mon parcours de reconversion et ma passion pour le développement web
                </p>
            </section>
            <section className="myProfile">
                <div className="sectionContent myProfileContent">
                    MyProfile
                </div>
            </section>
            <section className="retraining">
                <div className="sectionContent retrainingContent">
                    Retraining
                </div>
            </section>
            <section className="myJourney">
                <div className="sectionContent myJourneyContent">
                    MyJourney
                </div>
            </section>
            <section className="myTechnicalSkills">
                <div className="sectionContent myTechnicalSkillsContent">
                    MyTechnicalSkills
                </div>
            </section>
            <section className="myDiplomas">
                <div className="sectionContent myDiplomasContent">
                    MyDiplomas
                </div>
            </section>
            <section className="readyToCollaborateTogether">
                <div className="sectionContent readyToCollaborateTogetherContent">
                    <ReadyToCollaborateTogether />
                </div>
            </section>
            <section>

            </section>
            <section className="underConstruction">
                <div className="sectionContent underConstructionContent">
                    <UnderConstruction />
                </div>
            </section>
        </>
    );
}