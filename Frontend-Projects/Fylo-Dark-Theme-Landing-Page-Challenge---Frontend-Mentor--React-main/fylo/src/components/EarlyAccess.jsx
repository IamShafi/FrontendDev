import React, { useState } from 'react';
import style from './EarlyAccess.module.css';

function EarlyAccess() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
  };

  return (
    <div className={style.early_access}>
      <div className={style.early_access_card}>
        <h2>Get Early Access Today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous.
          If you have any question, our support team would be happy to help you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={style.input_button}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Get Started For Free</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EarlyAccess;
