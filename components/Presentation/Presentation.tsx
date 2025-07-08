'use client';
import "./presentation.scss";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import Medias from "../Medias/Medias";



export default function Presentation() {
    return (
        <article className="presentation">
            <div className="tag"><PiStudentBold /> À la recherche d’une alternance</div>
            <div>
                <h1>Développeur <span className="important">Full Stack</span></h1>
                <h2>React • Node.js • Nest.js</h2>
            </div>
            <p>Passionné par le développement web moderne, je transforme des idées en applications performantes et intuitives. 20 ans d’expérience en gestion de projets reconvertie en expertise technique.</p>
            <div className="presentationAction">
                <button>Voir mes projets <FaArrowRight /></button>
                <button
                    className="lightButton"
                    onClick={() => window.location.href = "mailto:pierre.tondeux@gmail.com"}
                >
                    Me contacter <MdEmail size={20} />
                </button>
            </div>
            <Medias />
        </article>
    )
}