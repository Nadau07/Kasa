import '../styles/LogementTitre.css'

function ficheLogementTitre(props){

    return(
            <div className='ficheLogementTitre'>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
                <>
                {props.tag.map((tag) => (
                    <span className='ficheLogementTag' key={tag}>{tag}</span>
                ))}
                </>
            </div>
    
    )
}

export default ficheLogementTitre