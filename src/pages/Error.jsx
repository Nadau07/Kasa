import '../styles/Error.css'
import Footer from '../components/Footer'
import {NavLink} from 'react-router-dom'

function Error(){
    return(
        <div>
       <div className='banner'>
        <NavLink to={`/`}>
        <img className='banner_logo'src='logo.jpg' alt='logo'/>
        </NavLink>
        <NavLink to={`/`}>Accueil</NavLink>
        <NavLink to={`/Apropos`}>A propos</NavLink>
    </div>
        <div className='errorDivGlobal'>
            <h2 className='error404'>404</h2>
            <p className="errorP1">Oups ! La page que vous demandez n'existe pas.</p>
            <p className='errorP2'>Retourner a la page d'accueil</p>
        </div>
        <Footer />
        </div>
    )
}

export default Error