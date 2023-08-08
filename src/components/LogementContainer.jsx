import '../styles/LogementContainer.css'
import LogementItem from './LogementItem';
import { useState, useEffect } from 'react';




function LogementContainer(){
    const [appartements, setAppartements] = useState([]);

    useEffect (()=>{
        fetch("ListeLogement.json")
        .then((response)=>response.json())
        .then((response)=>setAppartements(response))
        .catch(console.error)
        }, []);

   

 return (
    <div className='containerLogement'>
    {appartements.map((appartement)=>(
        <LogementItem key={appartement.id} title={appartement.title} cover={appartement.cover} id={appartement.id} />
    ))}
    
    </div>
)
}

export default LogementContainer