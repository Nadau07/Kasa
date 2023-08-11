import {NavLink} from 'react-router-dom'
import '../styles/Banner.css'
import Footer from '../components/Footer'
import LogementImage from '../components/LogementImage'
import LogementTitre from '../components/LogementTitre'
import LogementProprietaire from '../components/LogementProprietaire'
import LogementDescription from '../components/LogementDescription'
import '../styles/FicheLogement.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'



function FicheLogement() {
    const location = useLocation();
    console.log(location);
    console.log("l'id est:", location.state.appartementId);
    const [selectedResponse , setSelectedResponse] = useState(null)

    useEffect(() => {
        fetch("/ListeLogement.json")
        .then((response) => response.json())
        .then((responses) => {
            const selectedResponse = responses.find(response => response.id === location.state.appartementId);
            setSelectedResponse(selectedResponse)
            console.log("SelectedResp :", selectedResponse);
        })
        .catch(console.error);
    }, []);

    if (selectedResponse == null) return <div>Chargement de l'image..</div>;

   
    return(
        <>
        <div className='banner'>
            <div className='image_banner'><NavLink to={`/`}>
        <img className='banner_logo'src='/logo.jpg' alt='logo'/>  </NavLink>
        </div>
        
        <div className='lien_banner'><NavLink to={`/`}>Accueil</NavLink>
        <span className='separation-liens'></span>
        <NavLink to={`/Apropos`}>A propos</NavLink>
        </div>
        
    </div>
    <div  className='ficheLogementTotal'>
      

        <div className='component1'>
          
            <LogementImage pictures={selectedResponse.pictures}/>
            
        </div>

        <div className='component2Et3'>
        <LogementTitre title={selectedResponse.title} location={selectedResponse.location} tag={selectedResponse.tags}/>
        <LogementProprietaire rating={selectedResponse.rating} host={selectedResponse.host} />
        </div>

            <div className='component4Css'> 
            <LogementDescription title="Description" content={selectedResponse.description}/>
            <LogementDescription title="Equipements" content={selectedResponse.equipments.map(equipement =><li key={equipement} >{equipement}</li>)}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default FicheLogement