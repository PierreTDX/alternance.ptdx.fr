'use client';
import "./underConstruction.scss";
import { MdEmail } from "react-icons/md";


export default function UnderConstruction() {
    return (
        <article
            className="articleUnderConstruction"
            role="region"
            aria-labelledby="under-construction"
        >
            <div>
                <h2 id="under-construction">Site en construction</h2>
                <p>
                    Ce n’est pas parce que ce n’est pas terminé qu’il ne faut pas le diffuser !
                </p>
                <p>
                    En attendant, je recueille les avis des utilisateurs.
                </p>

            </div>

            <div className="readyToCollaborateAction">
                <button
                    type="button"
                    aria-label="Votre remarque ici"
                    onClick={() => { window.location.href = "mailto:pierre.tondeux@gmail.com" }}
                >
                    Votre remarque ici <MdEmail size={20} aria-hidden="true" />
                </button>

            </div>

        </article>

    );
}