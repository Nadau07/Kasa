import Footer from '../components/Footer'
import '../styles/Apropos.css'
import {NavLink} from 'react-router-dom'
import LogementDescription from '../components/LogementDescription'

function Apropos(){
    return(
        <div className='AproposGeneral'>
            <div className='banner'>
        <NavLink to={`/`}>
        <img className='banner_logo'src='logo.jpg' alt='logo'/>
        </NavLink>
        <NavLink to={`/`}>Accueil</NavLink>
        <NavLink to={`/Apropos`}>A propos</NavLink>
    </div>
            <img className='imgBanner2' src='Image_source_2.jpg' alt='ImgBanner2' />
            <div className='Apropos-container'>
                <LogementDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes." />
                <LogementDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <LogementDescription title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <LogementDescription title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes." />

            </div>
            <Footer />
        </div>
    )
}

export default Apropos