import "./page.scss";
import Presentation from "@/components/Presentation/Presentation";
import CardMe from "@/components/CardMe/CardMe";

export default function Home() {
  return (
    <div className="mainContent">
      <section className="homePresentation">
        <Presentation />
        <CardMe />
      </section>
      <section>

      </section>
    </div >
  );
}