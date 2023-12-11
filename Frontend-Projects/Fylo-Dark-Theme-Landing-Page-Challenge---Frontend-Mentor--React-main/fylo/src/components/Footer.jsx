/* eslint-disable max-len */
import React from 'react';
import style from './Footer.module.css';
import Logo from '../assets/images/logo.svg';
import LocationIcon from '../assets/images/icon-location.svg';
import PhoneIcon from '../assets/images/icon-phone.svg';
import EmailIcon from '../assets/images/icon-email.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src={Logo} alt="Website Logo" />
        </div>
        <div className={style.footer_columns}>
          <div className={style.footer_column_first}>
            <div className={style.location_icon}>
              <img src={LocationIcon} alt="Location Icon" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={style.footer_column_second}>
            <div className={style.contact_row}>
              <div className={style.icon}>
                <img src={PhoneIcon} alt="Phone Icon" />
              </div>
              <div className={style.text}>
                +1 (123) 456-7890
              </div>
            </div>
            <div className={style.contact_row}>
              <div className={style.icon}>
                <img src={EmailIcon} alt="Email Icon" />
              </div>
              <div className={style.text}>
                example@email.com
              </div>
            </div>
          </div>
          <div className={style.footer_column}>
            <ul>
              <li>About us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={style.footer_column}>
            <ul>
              <li>Contact us</li>
              <li>Terms</li>
              <li>Privasy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
