import React, { useState } from 'react';
import style from './MainMenu.module.css';
import Logo from '../assets/images/logo.svg';
import OutlineMenu from '../assets/images/icon-menu.svg';
import OutlineClose from '../assets/images/icon-close.svg';

function MainMenu() {
  const [nav, setNav] = useState(false);
  const toggleNav = () =>{
    setNav(!nav);
  }

  return (
    <nav className={style.wrapper}>
      <div className={style.main_menu}>
        <div
        onClick={toggleNav}
        onKeyDown={(e)=>{
          if(e.key==='Enter'){
            toggleNav();
          }
        }}
        role="button"
        tabIndex={0}
        className={style.mobile_btn}
        >
        {nav ? <img src={OutlineClose} alt="Close Icon" /> : <img src={OutlineMenu} alt="Menu Icon" />}
        </div>
      <div className={style.logo}>
        <img src={Logo} alt="App Logo"/>
      </div>
      <div
          onClick={toggleNav}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleNav();
            }
          }}
          role="button"
          tabIndex={0}
          className={`${style.overlay} ${nav ? style.overlay_active : ''}`}
        >
          <span className={style.sr_only}>Open menu</span>
        </div>
        <ul className={`${style.menu_items} ${nav ? style.active_mobile : ''}`}>
        <li>Features</li>
        <li>Team</li>
        <li>Sing In </li>
      </ul>
        
      </div>

    </nav>
  );
}

export default MainMenu;
