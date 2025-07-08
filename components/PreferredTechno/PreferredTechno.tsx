import "./preferredTechno.scss";
import { FaReact, FaNodeJs, FaGitAlt, FaServer, FaArrowRight } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";


export default function PreferredTechno() {
    return (
        <article className="articlePreferredTechno">
            <div>
                <h2>Technologies Préférées</h2>
                <p>Une stack moderne pour développer des applications web performantes et évolutives</p>
            </div>
            <div>
                <div className="iconsPreferTech">
                    <div className="iconPreferTech">
                        <FaReact size={38} className="react" />
                        <p>React</p>
                    </div>
                    <div className="iconPreferTech">
                        <IoLogoJavascript size={38} className="javascript" />
                        <p>Javascript</p>
                    </div>
                    <div className="iconPreferTech">
                        <FaNodeJs size={38} className="node" />
                        <p>Node.js</p>
                    </div>
                    <div className="iconPreferTech">
                        <SiMongodb size={38} className="mongodb" />
                        <p>MongoDB</p>
                    </div>
                    <div className="iconPreferTech">
                        <FaGitAlt size={38} className="git" />
                        <p>Git</p>
                    </div>
                    <div className="iconPreferTech">
                        <FaServer size={38} className="restapi" />
                        <p>REST API</p>
                    </div>
                </div>
            </div>
            <button>Voir toutes mes technos <FaArrowRight /></button>
        </article>
    )
}