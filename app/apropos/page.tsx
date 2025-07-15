import "./apropos.scss";
import ReadyToCollaborateTogether from "@/components/ReadyToCollaborate/ReadyToCollaborateTogether";
// import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";
import MyProfile from "@/components/MyProfile/MyProfile";
import Retraining from "@/components/Retraining/Retraining";
import MyTechnicalSkills from "@/components/MyTechnicalSkills/MyTechnicalSkills";
import MyDiplomas from "@/components/MyDiplomas/MyDiplomas";

export default function About() {
    return (
        <>
            <section className="headTitle">
                <h1>
                    <span className="important">À propos</span> de moi
                </h1>
                <p>
                    Découvrez mon parcours de reconversion et ma passion pour le développement web
                </p>
            </section>
            <section className="myProfile">
                <div className="sectionContent myProfileContent">
                    <MyProfile />
                </div>
            </section>
            <section className="retraining">
                <div className="sectionContent retrainingContent">
                    <Retraining />
                </div>
            </section>
            {/* <section className="myJourney">
                <div className="sectionContent myJourneyContent">
                    MyJourney
                </div>
            </section> */}
            <section className="myTechnicalSkills">
                <div className="sectionContent myTechnicalSkillsContent">
                    <MyTechnicalSkills />
                </div>
            </section>
            <section className="myDiplomas">
                <div className="sectionContent myDiplomasContent">
                    <MyDiplomas />
                </div>
            </section>
            <section className="readyToCollaborateTogether">
                <div className="sectionContent readyToCollaborateTogetherContent">
                    <ReadyToCollaborateTogether />
                </div>
            </section>

            {/* <section className="underConstruction">
                <div className="sectionContent underConstructionContent">
                    <UnderConstruction />
                </div>
            </section> */}
        </>
    );
}