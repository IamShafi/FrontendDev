import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f1f1f1').all(10));
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
    }
    
  }
  return(
    <div className=''>
      <section className='container'>
    <h3>color generator</h3>
    <form
      className=''
      onSubmit={handleSubmit}
    >
      <input
        className= { `${error}` ? 'error' : null }
        id=''
        type='text'
        placeholder='#f1525'
        value={color}
        onChange={(e)=>{
          setColor (e.target.value);
        }}
       />
        <button className='btn' type='submit'>submit</button>

    </form>
      </section>
      <section className='colors'>
        {list.map((color, index) =>{
          return(
            <SingleColor key={index} 
            {...color}
            index ={index}
            hexColor={color.hex}/>
          )
        })}
      </section>
    </div>
    )
}

export default App
