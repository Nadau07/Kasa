import '../styles/Banner.css'
import {Link} from 'react-router-dom'

function Banner(){
    return <div className='banner'>
        <div className='banner_logo'>
        <img src='logo.jpg' alt='logo'/>
        </div>
        <Link to={`/`}>Accueil</Link>
        <Link to={`/Apropos`}>A propos</Link>
    </div>
}

export default Banner