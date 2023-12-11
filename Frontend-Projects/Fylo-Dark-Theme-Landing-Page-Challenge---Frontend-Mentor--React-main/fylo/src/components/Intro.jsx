import React from 'react';
import style from './Intro.module.css'; // Создайте соответствующий CSS-модуль
import IntroImg from '../assets/images/illustration-intro.png';

function Intro() {
  return (
    <div className={style.intro}>
      <img src={IntroImg} className={style.introImage} alt="Intro" />
      <div className={style.introText}>
        <h1>
          All your files in one secure location,
          <br />
          accessible anywhere
        </h1>
        <p>
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with
          <br />
          friends, family, and co-workers.
        </p>
        <button className={style.getStartedButton} type="button">
          Get Started
        </button>
      </div>
    </div>

  );
}

export default Intro;
