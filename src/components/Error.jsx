import Banner from './Banner'
import '../styles/Error.css'
import Footer from './Footer'

function Error(){
    return(
        <div>
        <Banner/>
        <div className='errorDivGlobal'>
            <h2 className='error404'>404</h2>
            <p className="errorP1">Oups ! La page que vous demandez n'existe pas.</p>
            <p className='errorP2'>Retourner a la page d'accueil</p>
        </div>
        <Footer />
        </div>
    )
}

export default Error