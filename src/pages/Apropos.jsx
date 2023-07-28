import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Apropos.css'

function Apropos(){
    return(
        <div>
            <Banner />
            <img className='imgBanner2' src='Image_source_2.jpg' alt='ImgBanner2' />
            <div>EMPLACEMENT DES RUBRIQUES </div>
            <Footer />
        </div>
    )
}

export default Apropos