import '../styles/LogementTitre.css'

function ficheLogementComponents2(props){

    return(
            <div className='ficheLogementComponent2'>
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

export default ficheLogementComponents2