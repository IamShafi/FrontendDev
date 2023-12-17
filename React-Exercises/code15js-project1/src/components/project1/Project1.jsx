import React, { useState } from 'react';

const colors =["green", "red", "rgba(133,122,200)", "#f15025"];

const Project1 = () => {
  const [backgroundColor, setBackgroundColor] = useState(colors[0])
  const changeColor = () =>{
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)])
  }
  return (
    <div>
      <nav className='navbar bg-[#f15025] h-[3rem] grid align-center'>
        <h4>color flipper</h4>
        <ul className='nav-links'>
            <li><a href='index.html'>simple</a></li>
            <li><a href='index.html'>hex</a></li>
        </ul>
        </nav>
        <main>
            <div className='container'>
                <h2>background color : <span className='color'>#f15025</span></h2>
                <button className='btn btn-hero' onClick={changeColor}>click me</button>
            </div>
        </main>
    </div>
  )
}

export default Project1
