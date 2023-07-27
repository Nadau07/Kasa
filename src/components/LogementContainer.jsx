import '../styles/LogementContainer.css'
import LogementItem from './LogementItem';
import {Link} from 'react-router-dom'



function LogementContainer(){
    return <div className='containerLogement'>
        <LogementItem />
         <LogementItem />
         <LogementItem />
         <LogementItem />
         <LogementItem />
         <LogementItem />
    </div>
}

export default LogementContainer