import Banner from '../components/Banner'
import FicheLogementComponents1 from '../components/FicheLogementComponent1'
import FicheLogementComponents2 from '../components/FicheLogementComponent2'
import FicheLogementComponents3 from '../components/FicheLogementComponent3'
import FicheLogementComponents4 from '../components/FicheLogementComponent4'
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
          
            <FicheLogementComponents1 pictures={selectedResponse.pictures}/>
            
        </div>

        <div className='component2Et3'>
        <FicheLogementComponents2 title={selectedResponse.title} location={selectedResponse.location} tag={selectedResponse.tags}/>
        <FicheLogementComponents3 rating={selectedResponse.rating} host={selectedResponse.host} />
        </div>

            <div className='component4Css'> 
            <FicheLogementComponents4 title="Description" content={selectedResponse.description}/>
            <FicheLogementComponents4 title="Equipements" content={selectedResponse.equipments.map(equipement =><li>{equipement}</li>)}/>
            </div>
           
            
        
        </div>

    )
}

export default FicheLogement