import '../styles/LogementItem.css'
import {Link} from 'react-router-dom'




function LogementItem(props){

 return <Link to={`/FicheLogement/${props.id}`} state={{appartementId : props.id}}>
    <div className='caseItemLogement'>
        <img src={props.cover} alt="imgCover" />
        <div className='caseItemTitle'>{props.title} </div>
    </div>


    </Link>
}

export default LogementItem