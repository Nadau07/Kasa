import '../styles/Banner.css'
import {NavLink} from 'react-router-dom'

function Banner(){

    return ( 
        <>
    <div className='banner'>
        <NavLink to={`/`}>
        <img className='banner_logo'src='logo.jpg' alt='logo'/>
        </NavLink>
        <NavLink to={`/`}>Accueil</NavLink>
        <NavLink to={`/Apropos`}>A propos</NavLink>
    </div>
       <div className='divImgBanner'>
       <img className='imgBanner' src='Image_source_1.jpg' alt='imgBanner'/>
       <h1 className='titleImgBanner'><span className='spanBanner'>Chez vous,</span> partout et ailleurs</h1>
   </div>
   </>
    )
}

export default Banner
