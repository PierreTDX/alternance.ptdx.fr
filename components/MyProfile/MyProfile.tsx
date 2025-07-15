import './myProfile.scss'
import Image from 'next/image';
import { IoPerson } from "react-icons/io5";



export default function MyProfile() {
    return (
        <article className='articleMyProfile'
            role="region"
            aria-labelledby="my-profile"
        >
            <div className='imageWrapper'>
                <Image
                    src="/images/pierre169.png"
                    alt="Portrait de Pierre Tondeux"
                    width={1400}
                    height={800}
                    priority
                />
            </div>
            <div className='myArticleProfileContent'>
                <h2 id="my-profile"><IoPerson aria-hidden="true" />Mon Profil</h2>
                <p>
                    <span className='important'>Développeur full stack</span> avec 2 ans d’expérience en développement web et applicatif, j’interviens aussi bien côté <span className='important'>front-end</span> que <span className='important'>back-end</span>. Curieux, rigoureux et en veille constante, je conçois des solutions fiables et efficaces. Issu d’une reconversion professionnelle après 20 ans dans la gestion de projets complexes, j’apporte une vision d’ensemble et une capacité d’analyse qui renforcent la pertinence des solutions développées. Cette double approche me permet de créer des applications performantes, bien structurées et adaptées aux besoins réels des utilisateurs.                </p>
            </div>
        </article >
    )
}
