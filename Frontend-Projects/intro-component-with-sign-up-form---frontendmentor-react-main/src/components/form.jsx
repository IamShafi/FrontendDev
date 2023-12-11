import React, { useState } from 'react';
import errorImg from '../img/icon-error.svg';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();
  };

  const validateForm = () => {
    const { firstname, lastname, email, password } = formData;
    const newErrors = {};

    if (firstname === '') {
      newErrors.firstname = 'First Name cannot be empty';
    }

    if (lastname === '') {
      newErrors.lastname = 'Last Name cannot be empty';
    }

    if (email === '') {
      newErrors.email = 'Email cannot be empty';
    } else if (!isValid(email)) {
      newErrors.email = 'Email is not valid';
    }

    if (password === '') {
      newErrors.password = 'Password cannot be empty';
    }

    setErrors(newErrors);
  };

  const addErrorClass = (field) => (errors[field] ? 'error' : '');

  const isValid = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div>
        <div class="box box-blue">
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      </div>
    <form className="box" id="form" onSubmit={handleSubmit}>
      <div className={`form-control ${addErrorClass('firstname')}`}>
        <input
          type="text"
          placeholder="First Name"
          id="firstname"
          name="firstname"
          className="form-input"
          value={formData.firstname}
          onChange={handleChange}
        />
        {errors.firstname && <img src={errorImg} alt="errorsvg" />}
        {errors.firstname && <small>{errors.firstname}</small>}
      </div>

      <div className={`form-control ${addErrorClass('lastname')}`}>
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          className="form-input"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <img src={errorImg} alt="errorsvg" />}
        {errors.lastname && <small>{errors.lastname}</small>}
      </div>

      <div className={`form-control ${addErrorClass('email')}`}>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="form-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <img src={errorImg} alt="errorsvg" />}
        {errors.email && <small>{errors.email}</small>}
      </div>

      <div className={`form-control ${addErrorClass('password')}`}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="form-input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <img src={errorImg} alt="errorsvg" />}
        {errors.password && <small>{errors.password}</small>}
      </div>

      <button className="form-btn" type="submit">
        Claim your free trial
      </button>

      <small>By clicking the button, you are agreeing to our Terms and Services</small>
    </form>
    </div>
  );
};

export default MyForm;
