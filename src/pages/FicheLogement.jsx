import Banner from '../components/Banner'
import '../styles/FicheLogement.css'


function FicheLogement(){
    return(
        
    <div>
        <Banner />
        <div className='ficheLogementImg'>
            <img src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg' alt='Cosy' />
        </div>
        <h1 className='ficheLogementTitle'>TITRE DU LOGEMENT</h1>
            <h2 className='ficheLogementSubtitle'>SOUS TITRE</h2>
            <p>P1</p>
            <p>P2</p>
            <p>P3</p>

        <div className='ProprietaireEtNode'>
            <h3>NOM du propriétaire</h3>
            <div className='ImgProprietaire'></div>
            <div className='Note'>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            </div>
        </div>
        <div>
            <p>DESCRIPTION</p>
            <p>EQUIPEMENT</p>
        </div>
        </div>

    )
}

export default FicheLogement