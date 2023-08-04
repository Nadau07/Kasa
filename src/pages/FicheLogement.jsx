import Banner from '../components/Banner'
import FicheLogementComponents1 from '../components/FicheLogementComponent1'
import FicheLogementComponents2 from '../components/FicheLogementComponent2'
import FicheLogementComponents3 from '../components/FicheLogementComponent3'
import FicheLogementComponents4 from '../components/FicheLogementComponent4'
import '../styles/FicheLogement.css'


function FicheLogement(){
    return(
        
    <div className='ficheLogementTotal'>
        <Banner />

        <div className='component1'>
           <FicheLogementComponents1 />
        </div>

        <div className='component2Et3'>
        <FicheLogementComponents2 />
        <FicheLogementComponents3 />
        </div>

            <div className='component4Css'> 
            <FicheLogementComponents4 />
            <FicheLogementComponents4 />
            </div>
           
            
        
        </div>

    )
}

export default FicheLogement