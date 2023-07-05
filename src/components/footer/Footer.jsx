import imgFacebook from '../../assets/facebook.svg'
import imgInstagram from '../../assets/instagram.svg'
import imgTikTok from '../../assets/tiktok.svg'
import imgGmail from '../../assets/gmail.svg'

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <button className='icons'>Tik Tok<img className="img_icon" src={imgTikTok} alt="" /></button>
                <button className='icons'>Facebook<img className="img_icon" src={imgFacebook} alt="" /></button>
                <button className='icons'>Instagram<img className="img_icon" src={imgInstagram} alt="" /></button>
                <button className='icons'>study_methods@gmail.com<img className="img_icon" src={imgGmail} alt="" /></button>
                <div className='consultas'>
                    <p>Escribe aquí tu consulta a nuestro email</p>
                    <input className="input_consu" type="text" placeholder='Envianos un email ahora' />
                </div>
            </div>
        </footer>
    )
}

export default Footer