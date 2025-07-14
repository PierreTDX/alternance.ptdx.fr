'use client';
import "./interestedInMyProfile.scss";
import { MdEmail } from "react-icons/md";

export default function InterestedInMyProfile() {
    return (
        <article
            className="articleInterestedInMyProfile"
            role="region"
            aria-labelledby="interested-in-my-profile"
        >
            <div>
                <h2 id="interested-in-my-profile">Intéressé par mon profil ?</h2>
                <p>
                    Discutons de votre prochain projet et de mes compétences en développement.
                </p>
            </div>

            <button
                type="button"
                className="lightButton"
                aria-label="Me contacter par email"
                onClick={() => { window.location.href = "/contact" }}
            >
                Me contacter <MdEmail size={20} aria-hidden="true" />
            </button>

        </article>

    );
}