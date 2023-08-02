import '../styles/LogementItem.css'
import {Link} from 'react-router-dom'




function LogementItem(props){
    console.log("props:", props)
    

 return <Link to='/FicheLogement'>
    <div className='caseItemLogement'>
        <img src={props.cover} alt="imgCover" />
        <div className='caseItemTitle'>{props.title} </div>
    </div>


    </Link>
}

export default LogementItem