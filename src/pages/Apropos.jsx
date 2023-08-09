import Footer from '../components/Footer'
import '../styles/Apropos.css'
import {NavLink} from 'react-router-dom'

function Apropos(){
    return(
        <div>
            <div className='banner'>
        <NavLink to={`/`}>
        <img className='banner_logo'src='logo.jpg' alt='logo'/>
        </NavLink>
        <NavLink to={`/`}>Accueil</NavLink>
        <NavLink to={`/Apropos`}>A propos</NavLink>
    </div>
            <img className='imgBanner2' src='Image_source_2.jpg' alt='ImgBanner2' />
            <div>EMPLACEMENT DES RUBRIQUES </div>
            <Footer />
        </div>
    )
}

export default Apropos