import "./footer.scss";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaPhoneSquare } from "react-icons/fa";



export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <p>&copy; {new Date().getFullYear()} Pierre Tondeux. Tous droits réservés.</p>
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
            </div>
        </footer>
    );
}