import "./cardMe.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import Image from 'next/image';



export default function CardMe() {
    return (
        <article className="cardMe" aria-label="Carte de présentation de Pierre Tondeux, développeur full stack">
            <Image
                src="/images/pierre169.png"
                alt="Portrait de Pierre Tondeux"
                width={1400}
                height={800}
                priority
            />            <div className="cardMeContent">
                <h3>Pierre Tondeux</h3>
                <h4>Développeur <span className="important">Full Stack</span></h4>

                <div className="iconsCardMe" aria-label="Compétences techniques principales">
                    <FaReact size={24} className="react" title="React" aria-label="React" role="presentation" />
                    <IoLogoJavascript size={24} className="javascript" title="JavaScript" aria-label="JavaScript" role="presentation" />
                    <FaNodeJs size={24} className="node" title="Node.js" aria-label="Node.js" role="presentation" />
                    <SiNestjs size={24} className="nest" title="NestJS" aria-label="NestJS" role="presentation" />
                    <IoLogoGithub size={24} className="github" title="GitHub" aria-label="GitHub" role="presentation" />
                </div>
                <div className="stats" aria-label="Statistiques personnelles">
                    <div>
                        <p aria-label="Plus de onze projets">11+</p>
                        <p>Projets</p>
                    </div>
                    <div>
                        <p aria-label="Plus de vingt ans d'expérience">20+</p>
                        <p>Ans d’expérience</p>
                    </div>
                    <div>
                        <p aria-label="Motivation à cent pour cent">100%</p>
                        <p>Motivation</p>
                    </div>
                </div>
            </div>
        </article>
    )
}