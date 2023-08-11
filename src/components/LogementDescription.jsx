import { useState } from 'react'
import '../styles/LogementDescription.css'


function FicheLogementComponents4(props){

const [ParagrapheVisible , setParagrapheVisible ] = useState(false)

const ParagrapheActif = () =>{
    setParagrapheVisible(!ParagrapheVisible);
}


    return(

        <div className='component4Totalite'>
            <p className='logementDescription'>
                <span>{props.title}</span><span><i className="fa-solid fa-chevron-down" onClick= {ParagrapheActif}></i></span></p>
            {ParagrapheVisible && <p className='paragrapheDescription'>{props.content}</p>} 
        </div>
        
        /* si ma condition Paragraphevisible est false alors le paragraphe ne s'affiche pas
        Quand on clique sur l'icone, la fonction "ParagrapheActif s'execute :la fonction prendra le contraire de l'etat actuel du paragraphe (c-a-d non visible car false) et l'affichera */
    )
}

export default FicheLogementComponents4