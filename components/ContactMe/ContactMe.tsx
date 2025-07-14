'use client';
import "./contactMe.scss";
import { SiMaildotru } from "react-icons/si";
import { IoLogoGithub } from 'react-icons/io';
import { FaPhoneSquare, FaLightbulb, FaCheckCircle, FaArrowCircleDown, FaLinkedin } from 'react-icons/fa';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function ContactMe() {
    return (
        <>
            <article className="articleContactMe">
                <h2><div><MdEmail className="iconContact" size={46} role="presentation" /></div> Me Contacter</h2>
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
                            <FaLinkedin size={24} role="presentation" />
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
                    <li>
                        <div className="iconLiContact">
                            <FaLocationDot size={26} role="presentation" />
                        </div>
                        <p aria-label="Ma mobilité en IDF"
                        >
                            <p className="typeContact">Mobilité</p>
                            <p className="detailContact">dept: 78, 75, 92, 95</p>
                        </p>
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
                        <li><div className="whyMeCheck"><FaCheckCircle className="important" role="presentation" /></div> <p>20+ ans d’expérience en gestion de projets</p></li>
                        <li><div className="whyMeCheck"><FaCheckCircle className="important" role="presentation" /></div> <p>Compétences techniques solides</p></li>
                        <li><div className="whyMeCheck"><FaCheckCircle className="important" role="presentation" /></div> <p>Motivation et adaptabilité</p></li>
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
                        Mon CV ici <PiReadCvLogoFill size={24} aria-hidden="true" />
                    </button>

                </div>
            </article>
        </>
    );
}