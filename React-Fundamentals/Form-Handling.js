import React, { useState } from 'react';

export const MyForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted', formData);
    }
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    /**
     *   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
     */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> username:
                    <input
                        type='text'
                        placeholder='enter'
                        name='username'
                        value={username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}