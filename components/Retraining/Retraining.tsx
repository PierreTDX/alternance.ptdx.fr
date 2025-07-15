import './retraining.scss'
import { FaBriefcase, FaRocket } from "react-icons/fa";
import { FaCheck, FaLightbulb } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";





export default function Retraining() {
    return (
        <article className='articleRetraining'
            role="region"
            aria-labelledby="my-retraining"
        >
            <div>
                <h2 id="my-retraining">Expérience métier et compétences techniques</h2>
            </div>
            <div className='course'>
                <div className='courseContent'>
                    <h3><div className="iconRetrainingTitle"><FaBriefcase size={24} role="presentation" /></div>Parcours professionnel</h3>
                    <p>20 ans d’expérience dans la coordination d’activités complexes, au sein d’environnements exigeants.
                        Un parcours enrichissant, fondé sur la collaboration, l’analyse et la prise de décision, aujourd’hui mis au service du développement web.
                    </p>
                    <ul className='courseUl'>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Collaboration avec des profils variés</p>
                        </li>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Pilotage d’objectifs opérationnels</p>
                        </li>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Résolution de problématiques concrètes et complexes</p>
                        </li>
                    </ul>
                </div>
                <div className='courseContent'>
                    <h3><div className="iconRetrainingTitle"><FaRocket size={24} role="presentation" /></div>Transition vers le développement</h3>
                    <p>Animé par un fort intérêt pour les technologies numériques, j’ai choisi d’évoluer vers le développement pour concevoir des solutions digitales fiables, utiles et bien pensées.
                    </p>
                    <ul className='courseUl'>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Formation intensive centrée sur la pratique</p>
                        </li>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Réalisation de projets web en autonomie</p>
                        </li>
                        <li>
                            <div className="iconRetraining">
                                <FaCheck size={16} role="presentation" />
                            </div>
                            <p>Veille continue sur les outils et standards du secteur</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='transferableSkills'>
                <h3>Compétences transférables</h3>
                <p>Mon expérience antérieure renforce aujourd’hui ma pratique du développement
                </p>
                <ul className='transferableSkillsUl'>
                    <li>
                        <div className="iconTransferableSkills">
                            <FaGear size={32} role="presentation" />
                        </div>
                        <p>Rigueur & sens de l’organisation</p>
                    </li>
                    <li>
                        <div className="iconTransferableSkills">
                            <RiTeamFill size={32} role="presentation" />
                        </div>
                        <p>Travail collaboratif & communication claire</p>
                    </li>
                    <li>
                        <div className="iconTransferableSkills">
                            <FaLightbulb size={32} role="presentation" />
                        </div>
                        <p>Esprit d’analyse & capacité à innover</p>
                    </li>
                </ul>
            </div>

        </article>
    )
}