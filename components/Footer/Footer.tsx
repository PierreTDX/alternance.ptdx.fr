import "./footer.scss";
import Medias from "../Medias/Medias";
import { FaCode } from "react-icons/fa";


export default function Footer() {
    return (
        <footer
            role="contentinfo"
            aria-label="Pied de page contenant les liens de contact et les droits d’auteur"
        >
            <div className="footerContent">
                <p>
                    &copy; {new Date().getFullYear()} <FaCode className="important" /><span>ptdx</span>. Tous droits réservés.
                </p>
                <Medias />
            </div>
        </footer>
    );
}