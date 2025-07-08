import "./cardMe.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import Image from 'next/image';



export default function CardMe() {
    return (
        <article className="cardMe">
            <Image src="/images/pierre169.png" alt="Portrait de Pierre Tondeux" width={620} height={345} />
            <div className="cardMeContent">
                <h3>Pierre Tondeux</h3>
                <h4>Développeur <span className="important">Full Stack</span></h4>

                <div className="iconsCardMe">
                    <FaReact size={24} className="react" />
                    <IoLogoJavascript size={24} className="javascript" />
                    <FaNodeJs size={24} className="node" />
                    <SiNestjs size={24} className="nest" />
                    <IoLogoGithub size={24} className="github" />
                </div>

                <div className="stats">
                    <div>
                        <p>11+</p>
                        <p>Projets</p>
                    </div>
                    <div>
                        <p>20+</p>
                        <p>Ans d’expérience</p>
                    </div>
                    <div>
                        <p>100%</p>
                        <p>Motivation</p>
                    </div>
                </div>
            </div>
        </article>
    )
}