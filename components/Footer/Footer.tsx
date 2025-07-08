import "./footer.scss";
import Medias from "../Medias/Medias";


export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <p>&copy; {new Date().getFullYear()} Pierre Tondeux. Tous droits réservés.</p>
                <Medias />
            </div>
        </footer>
    );
}