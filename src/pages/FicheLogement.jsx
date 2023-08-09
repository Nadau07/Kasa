import Banner from '../components/Banner'
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
        
    <div  className='ficheLogementTotal'>
        <Banner />

        <div className='component1'>
          
            <LogementImage pictures={selectedResponse.pictures}/>
            
        </div>

        <div className='component2Et3'>
        <LogementTitre title={selectedResponse.title} location={selectedResponse.location} tag={selectedResponse.tags}/>
        <LogementProprietaire rating={selectedResponse.rating} host={selectedResponse.host} />
        </div>

            <div className='component4Css'> 
            <LogementDescription title="Description" content={selectedResponse.description}/>
            <LogementDescription title="Equipements" content={selectedResponse.equipments.map(equipement =><li>{equipement}</li>)}/>
            </div>
           
            
        
        </div>

    )
}

export default FicheLogement