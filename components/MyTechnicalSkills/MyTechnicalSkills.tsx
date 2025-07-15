import './myTechnicalSkills.scss'
import { FaReact, FaServer, FaTools } from "react-icons/fa";


export default function MyTechnicalSkills() {
    return (
        <article className='articleMyTechnicalSkills'
            role="region"
            aria-labelledby="my-technical-skills"
        >
            <div>
                <h2 id="my-technical-skills">Mes Compétences Techniques</h2>
                <p>Mes technologies et outils que j'utilise</p>
            </div>
            <div className='technicalSkills'>
                <div className='technicalSkillsContent'>
                    <h3><div className="iconTechnicalSkills"><FaReact size={24} role="presentation" /></div>Front-end</h3>
                    <ul className='technicalSkillsUl'>
                        <li>
                            React
                        </li>
                        <li>
                            Redux
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Html / Css / Scss
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Ionic
                        </li>
                    </ul>
                </div>
                <div className='technicalSkillsContent'>
                    <h3><div className="iconTechnicalSkills"><FaServer size={24} role="presentation" /></div>Back-end</h3>
                    <ul className='technicalSkillsUl'>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Nest.js
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            API REST
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
                <div className='technicalSkillsContent'>
                    <h3><div className="iconTechnicalSkills"><FaTools size={24} role="presentation" /></div>Outils</h3>
                    <ul className='technicalSkillsUl'>
                        <li>
                            Git / GitHub
                        </li>
                        <li>
                            YouTrack
                        </li>
                        <li>
                            Cypress / Jest
                        </li>
                        <li>
                            Figma
                        </li>
                        <li>
                            Postman
                        </li>
                        <li>
                            Draw.io
                        </li>
                    </ul>
                </div>

            </div>
        </article>
    )
}