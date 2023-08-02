import '../styles/Banner.css'
import {NavLink} from 'react-router-dom'

function Banner(){

    return <div className='banner'>
        <NavLink to={`/`}>
        <img className='banner_logo'src='logo.jpg' alt='logo'/>
        </NavLink>
        <NavLink to={`/`}>Accueil</NavLink>
        <NavLink to={`/Apropos`}>A propos</NavLink>
    </div>
}

export default Banner
