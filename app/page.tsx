import "./page.scss";
import Presentation from "@/components/Presentation/Presentation";
import CardMe from "@/components/CardMe/CardMe";
import PreferredTechno from "@/components/PreferredTechno/PreferredTechno";
import RecentProjects from "@/components/RecentProjects/RecentProjects";

export default function Home() {
  return (
    <>
      <section className="homePresentation">
        <div className="sectionContent homePresentationContent">
          <Presentation />
          <CardMe />
        </div>
      </section>
      <section className="PreferredTechno">
        <div className="sectionContent PreferredTechnoContent">
          <PreferredTechno />
        </div>
      </section>
      <section className="recentProjects">
        <div className="sectionContent recentProjectsContent">
          <RecentProjects />
        </div>
      </section>
    </>
  );
}