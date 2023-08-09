import { useState } from 'react';
import '../styles/LogementImage.css'

function LogementImage(props) {
    const pictures = props.pictures
    const [Img , ImgActuelle ] = useState(0);

    const ClassActive=(i)=>{
        if (i === Img) return "ficheLogementImgActive";
        return "";
    }
    const ImageSuivante=()=>{
        ImgActuelle((Img + 1) % pictures.length );
    }

    const ImagePrecedente = ()=>{
        const ImgPrecedente = Img - 1;
        if (ImgPrecedente < 0){
        ImgActuelle(pictures.length -1 );
        return;
    }
    ImgActuelle((Img -1 ) % pictures.length -1)
}

    return (
        
    

        <div className='ImageLogement' >
           {pictures.map((picture, i)=>(<img  key={picture} src={picture} alt="pictures" className={ClassActive(i)}
             ></img>))}
                <button onClick={ImagePrecedente} className='BoutonPrecedent'><i class="fa-solid fa-chevron-left"></i></button>
          
        <button onClick={ImageSuivante} className='BoutonSuivant'><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        
        
        
    );
}



export default LogementImage