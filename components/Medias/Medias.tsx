'use client';
import "./medias.scss";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaPhoneSquare } from "react-icons/fa";

export default function Medias() {
    return (
        <nav className="iconsFooter" aria-label="Liens vers les réseaux sociaux et contacts">
            <a
                href="https://github.com/PierreTDX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub de Pierre Tondeux, dans une autre fenêtre"
                title="GitHub"
            >
                <IoLogoGithub size={24} role="presentation" />
            </a>

            <a
                href="https://www.linkedin.com/in/pierre-tondeux/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Pierre Tondeux, dans une autre fenêtre"
                title="LinkedIn"
            >
                <IoLogoLinkedin size={24} role="presentation" />
            </a>

            <a
                href="mailto:pierre.tondeux@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Envoyer un email à pierre.tondeux@gmail.com, dans une autre fenêtre"
                title="Email"
            >
                <MdEmail size={24} role="presentation" />
            </a>

            <a
                href="tel:+33664199427"
                aria-label="Appeler le 06 64 19 94 27, dans une autre fenêtre"
                title="Téléphone"
            >
                <FaPhoneSquare size={24} role="presentation" />
            </a>

            <a
                href="/CV_Pierre_TONDEUX_DevFullStack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consulter le CV de Pierre Tondeux au format PDF, dans une autre fenêtre"
                title="Lire mon CV"
            >
                <PiReadCvLogoFill size={24} role="presentation" />
            </a>
        </nav>
    );
}