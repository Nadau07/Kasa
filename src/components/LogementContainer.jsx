import '../styles/LogementContainer.css'
import LogementItem from './LogementItem';
import { useState, useEffect } from 'react';



function LogementContainer(){
    const [appartements, setAppartements] = useState([]);

    useEffect(fetchAppartements, []);

    function fetchAppartements(){
    fetch("ListeLogement.json")
    .then((response)=>response.json())
    .then((response)=>setAppartements(response))
    .catch(console.error)
    }

 return (
    <div className='containerLogement'>
    {appartements.map((appartement)=>(
        <LogementItem title={appartement.title} cover={appartement.cover} />
    ))}
    
    </div>
)
}

export default LogementContainer