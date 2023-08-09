import '../styles/LogementImage.css'

function FicheLogementComponents1(props) {
    return (
        <div>
            {props.pictures.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

export default FicheLogementComponents1