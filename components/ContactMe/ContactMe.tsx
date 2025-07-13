'use client';
import "./contactMe.scss";
import { SiMaildotru } from "react-icons/si";
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { FaPhoneSquare, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { MdEmail } from "react-icons/md";
import { FaArrowCircleDown } from "react-icons/fa";


export default function ContactMe() {
    return (
        <>
            <article className="articleContactMe">
                <h2><MdEmail className="iconContact" size={46} role="presentation" /> Me Contacter</h2>
                <ul>
                    <li>
                        <div className="iconLiContact">
                            <SiMaildotru size={24} role="presentation" />
                        </div>
                        <a href="mailto:pierre.tondeux@gmail.com"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="Envoyer un email à pierre.tondeux@gmail.com, dans une autre fenêtre"
                        >
                            <p className="typeContact">Email</p>
                            <p className="detailContact">pierre.tondeux@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <div className="iconLiContact">
                            <FaPhoneSquare size={24} role="presentation" />
                        </div>
                        <a href="tel:+33664199427"
                            aria-label="Appeler le 06 64 19 94 27"
                        >
                            <p className="typeContact">Téléphone</p>
                            <p className="detailContact">06 64 19 94 27</p>
                        </a>
                    </li>
                    <li>
                        <div className="iconLiContact">
                            <IoLogoLinkedin size={28} role="presentation" />
                        </div>
                        <a href="https://www.linkedin.com/in/pierre-tondeux/"
                            aria-label="Profil LinkedIn de Pierre Tondeux, dans une autre fenêtre"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="typeContact">Linkedin</p>
                            <p className="detailContact">in/pierre-tondeux</p>
                        </a>
                    </li>
                    <li>
                        <div className="iconLiContact">
                            <IoLogoGithub size={26} role="presentation" />
                        </div>
                        <a href="https://github.com/PierreTDX"
                            aria-label="Profil GitHub de Pierre Tondeux, dans une autre fenêtre"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="typeContact">GitHub</p>
                            <p className="detailContact">PierreTDX</p>
                        </a>
                    </li>
                </ul>
                <div className="arrows">
                    <FaArrowCircleDown size={48} className="important" />
                    {/* <FaArrowCircleDown size={48} className="important" />
                    <FaArrowCircleDown size={48} className="important" />
                    <FaArrowCircleDown size={48} className="important" /> */}
                </div>
                <div className="whyMe">
                    <h3><FaLightbulb role="presentation" /> Pourquoi me choisir ?</h3>
                    <ul>
                        <li><FaCheckCircle className="important" role="presentation" /> 20+ ans d’expérience en gestion de projets</li>
                        <li><FaCheckCircle className="important" role="presentation" /> Compétences techniques solides</li>
                        <li><FaCheckCircle className="important" role="presentation" /> Motivation et adaptabilité</li>
                    </ul>
                    <button
                        type="button"
                        className="lightButton"
                        aria-label="Ouvrir et télécharger mon CV dans une nouvelle fenêtre"
                        onClick={() => {

                            window.open("/CV_Pierre_TONDEUX_DevFullStack.pdf", "_blank", "noopener,noreferrer");

                            // Crée un lien invisible pour télécharger
                            const link = document.createElement("a");
                            link.href = "/CV_Pierre_TONDEUX_DevFullStack.pdf";
                            link.download = "CV_Pierre_TONDEUX_DevFullStack.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Télécharger mon CV <PiReadCvLogoFill size={20} aria-hidden="true" />
                    </button>

                </div>
            </article>
        </>
    );
}