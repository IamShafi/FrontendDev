import React from 'react';
import style from './Productivity.module.css';
import ProductivityImage from '../assets/images/illustration-stay-productive.png';

function Productivity() {
  return (
    <div className={style.wrapper}>
      <div className={style.productivity_section}>
        <div className={style.productivity_image}>
          <img src={ProductivityImage} alt="Productivity" />
        </div>
        <div className={style.productivity_content}>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has you
            covered for all of your file storage needs.
          </p>
          <p>
            Securely share tes and folders with friends, family, and colleagues for
            live collaboration. No email attachments required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Productivity;
