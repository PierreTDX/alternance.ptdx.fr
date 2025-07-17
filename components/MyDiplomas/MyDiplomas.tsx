import './myDiplomas.scss'
import HexagonShape from '../HexagonShape/HexagonShape'


export default function MyDiplomas() {
    return (
        <article className='articleMyDiplomas'
            role="region"
            aria-labelledby="my-diplomas"
        >
            <div>
                <h2 id="my-diplomas">Formations Clés</h2>
                {/* <p>xxx</p> */}
            </div>
            <div className='diplomas'>
                <div className='diplomasContent'>
                    <div className='hexagonShapeContent'>
                        <HexagonShape number={1} className='hexagonShape' />
                    </div>
                    <div>
                        <h3>Bachelor 3 Concepteur Développeur d’Applications</h3>
                        <p>2023</p>
                    </div>
                </div>
                <div className='diplomasContent'>
                    <div className='hexagonShapeContent'>
                        <HexagonShape number={2} className='hexagonShape' />
                    </div>
                    <div>
                        <h3>Bachelor 3 Développeur Concepteur Logiciel</h3>
                        <p>2025</p>
                    </div>
                </div>
                <div className='diplomasContent'>
                    <div className='hexagonShapeContent'>
                        <HexagonShape number={3} className='hexagonShape' />
                    </div>
                    <div>
                        <h3>Mastère Expert en Développement Full Stack</h3>
                        <p>2025/2027 (<span className='important'>alternance</span>)</p>
                    </div>
                </div>
            </div>
        </article>
    )
}