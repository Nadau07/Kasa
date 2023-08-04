import Banner from '../components/Banner'
import FicheLogementComponents2 from '../components/FicheLogementComponent2'
import FicheLogementComponents3 from '../components/FicheLogementComponent3'
import FicheLogementComponents4 from '../components/FicheLogementComponent4'
import '../styles/FicheLogement.css'


function FicheLogement(){
    return(
        
    <div className='ficheLogementTotal'>
        <Banner />

        <div className='ficheLogementComponent1'>
            <img className='ficheLogementImg' src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg' alt='Cosy' />
        </div>

        <div className='ficheLogementComponent2Et3'>
        <FicheLogementComponents2 />
        <FicheLogementComponents3 />

        </div>

            <FicheLogementComponents4 />
        
        </div>

    )
}

export default FicheLogement