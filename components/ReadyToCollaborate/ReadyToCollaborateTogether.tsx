'use client';
import "./readyToCollaborate.scss";
import { FaRegEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function ReadyToCollaborateTogether() {
    return (
        <article
            className="articleReadyToCollaborate"
            role="region"
            aria-labelledby="ready-to-collaborate"
        >
            <div>
                <h2 id="ready-to-collaborate">Prêt à collaborer ensemble ?</h2>
                <p>
                    Découvrez mes réalisations et n’hésitez pas à me contacter pour discuter de votre projet
                </p>
            </div>

            <div className="readyToCollaborateAction">
                <button
                    type="button"
                    aria-label="Me contacter par email"
                    onClick={() => { window.location.href = "/projets" }}
                >
                    Voir mes projets <FaRegEye size={20} aria-hidden="true" />
                </button>

                <button
                    type="button"
                    className="lightButton"
                    aria-label="Voir mes projets"
                    onClick={() => { window.location.href = "/contact" }}
                >
                    Me contacter <MdEmail size={20} aria-hidden="true" />
                </button>

            </div>

        </article>

    );
}