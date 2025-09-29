import "./counter.scss";
import Countdown from "@/components/Countdown/Countdown";

export default function Counter() {
    return (
        <>
            <section className="headTitle">
                <h1>
                    Mon <span className="important">Décompte</span>
                </h1>
                <h2>
                    avant de trouver mon alternance
                </h2>
            </section>
            <section className="counter">
                <div className="sectionContent counterContent">
                    <Countdown />
                </div>
            </section>

        </>
    );
}