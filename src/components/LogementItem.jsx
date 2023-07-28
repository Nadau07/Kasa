import '../styles/LogementItem.css'
import {Link} from 'react-router-dom'

function LogementItem(){
    return <Link to='/FicheLogement'><div className='caseItemLogement'><h2 className='caseItemTitle'>Titre <br/>de la location</h2></div></Link>
}

export default LogementItem