import '../styles/FicheLogementComponent4.css'


function FicheLogementComponents4(props){

    return(

        <div className='component4Totalite'>
            <p className='logementDescription'>
                <span>{props.title}</span><span><i className="fa-solid fa-chevron-down"></i></span></p>
            <p className='paragrapheDescription'>{props.content}</p>
        </div>

    )
}

export default FicheLogementComponents4