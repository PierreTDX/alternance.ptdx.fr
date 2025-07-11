import "./preferredTechno.scss";
import { FaReact, FaNodeJs, FaGitAlt, FaServer, FaArrowRight } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

export default function PreferredTechno() {
    return (
        <article
            className="articlePreferredTechno"
            role="region"
            aria-labelledby="preferred-tech-title"
        >
            <div>
                <h2 id="preferred-tech-title">Technologies Préférées</h2>
                <p>
                    Une stack moderne pour développer des applications web performantes et évolutives
                </p>
            </div>

            <ul className="iconsPreferTech">
                <li className="iconPreferTech">
                    <FaReact size={38} className="react" aria-label="React" />
                    <p>React</p>
                </li>
                <li className="iconPreferTech">
                    <IoLogoJavascript size={38} className="javascript" aria-label="JavaScript" />
                    <p>JavaScript</p>
                </li>
                <li className="iconPreferTech">
                    <FaNodeJs size={38} className="node" aria-label="Node.js" />
                    <p>Node.js</p>
                </li>
                <li className="iconPreferTech">
                    <SiMongodb size={38} className="mongodb" aria-label="MongoDB" />
                    <p>MongoDB</p>
                </li>
                <li className="iconPreferTech">
                    <FaGitAlt size={38} className="git" aria-label="Git" />
                    <p>Git</p>
                </li>
                <li className="iconPreferTech">
                    <FaServer size={38} className="restapi" aria-label="API REST" />
                    <p>REST API</p>
                </li>
            </ul>

            <button aria-label="Voir toutes mes technologies">
                Voir toutes mes technos <FaArrowRight aria-hidden="true" />
            </button>
        </article>
    );
}