'use client';
import "./readyToCollaborate.scss";
import { FaRegEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function ReadyToCollaborate() {
    return (
        <article
            className="articleReadyToCollaborate"
            role="region"
            aria-labelledby="ready-to-collaborate"
        >
            <div>
                <h2 id="ready-to-collaborate">Intéressé par mon profil ?</h2>
                <p>
                    Un projet? Avez-vous pensé à l’alternance? Je suis ouvert à toutes les opportunités qui me permettront de grandir et d’apporter ma valeur ajoutée.
                </p>
            </div>

            <div className="readyToCollaborateAction">
                <button
                    type="button"
                    aria-label="Voir mes projets"
                    onClick={() => { window.location.href = "mailto:pierre.tondeux@gmail.com" }}
                >
                    Me contacter <MdEmail size={20} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    className="lightButton"
                    aria-label="Me contacter par email"
                    onClick={() => { window.location.href = "/projets" }}
                >
                    Voir mes projets <FaRegEye size={20} aria-hidden="true" />
                </button>
            </div>

        </article>

    );
}