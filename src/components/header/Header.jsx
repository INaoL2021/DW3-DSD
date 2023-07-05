import { useState } from 'react';
import bookLogo from '../../assets/book.svg';
import imgNavBar from '../../assets/navBar.svg';
import './Header.css';

function Header({ handleClick }) {
  const [ocultar, setOcultar] = useState(false);
  const [borderRadiusLeft, setBorderRadiusLeft] = useState('10px');
  const [borderRadiusRight, setBorderRadiusRight] = useState('10px');

  const handleBotonClick = () => {
    setOcultar(!ocultar);
    // Tenes que hacer esto
    // setBorderRadiusLeft(ocultar ? '10px' : '0px');
    // setBorderRadiusRight(ocultar ? '10px' : '0px');
    setBorderRadiusLeft(borderRadiusLeft === '10px' ? '0px' : '10px');
    setBorderRadiusRight(borderRadiusRight === '10px' ? '0px' : '10px');
    handleClick();
  };

  return (
    <header className="header_container">
      <div
        className="header_content"
        style={{
            borderBottomLeftRadius: borderRadiusLeft,
            borderBottomRightRadius: borderRadiusRight,
        }}
      >
        <div className="header_logo">
          <img src={bookLogo} alt="logo" />
          <h4 className='logo_title'><b>STUDY_METHOD</b></h4>
        </div>
        <div className='search_input'>
          <input className="search_int" type="text" placeholder='Busca tu método de estudio' />
        </div>
        <div className="header_nav">
          <img onClick={handleBotonClick} src={imgNavBar} alt="nav bar" />
        </div>
      </div>
      <div className={`header_items ${ocultar ? 'visible' : ''}`}>
        <ul>
            <li><b>Inicio</b></li>
            <li><b>Metodos</b></li>
            <li><b>Herramientas</b></li>
          </ul>
      </div>
    </header>
  );
}

export default Header;