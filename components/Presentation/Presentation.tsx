'use client';
import "./presentation.scss";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaPhoneSquare } from "react-icons/fa";


export default function Presentation() {
    return (
        <article className="presentation">
            <div className="tag"><PiStudentBold /> À la recherche d’une alternance</div>
            <div>
                <h1>Développeur <span className="important">Full Stack</span></h1>
                <h2>React • Node.js • Nest.js</h2>
            </div>
            <p>Passionné par le développement web moderne, je transforme des idées en applications performantes et intuitives. 20 ans d'expérience en gestion de projets reconvertie en expertise technique.</p>
            <div className="presentationAction">
                <button>Voir mes projets <FaArrowRight /></button>
                <button
                    className="lightButton"
                    onClick={() => window.location.href = "mailto:pierre.tondeux@gmail.com"}
                >
                    Me contacter <MdEmail size={20} />
                </button>
            </div>
            <div className="iconsFooter">
                <a href="https://github.com/PierreTDX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <IoLogoGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/pierre-tondeux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                >
                    <IoLogoLinkedin size={24} />
                </a>
                <a href="mailto:pierre.tondeux@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <MdEmail size={24} />
                </a>
                <a
                    href="tel:+33664199427"
                    aria-label="Téléphone"
                >
                    <FaPhoneSquare size={24} />
                </a>
                <a
                    href="/CV_Pierre_TONDEUX_DevFullStack.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir le CV dans une nouvelle fenêtre"
                    title="Lire mon CV"
                >
                    <PiReadCvLogoFill size={24} />
                </a>
            </div>

        </article>
    )
}