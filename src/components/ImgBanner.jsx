import '../styles/ImgBanner.css'

function ImgBanner(){
    return (
        <div className='divImgBanner'>
            <img className='imgBanner' src='Image_source_1.jpg' alt='imgBanner'/>
            <h1 className='titleImgBanner'><span className='spanBanner'>Chez vous,</span> partout et ailleurs</h1>
        </div>
    )
}

export default ImgBanner