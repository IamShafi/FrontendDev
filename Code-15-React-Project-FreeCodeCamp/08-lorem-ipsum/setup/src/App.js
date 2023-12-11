import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [ count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    console.log(amount);
    if(count <= 0){
      amount =1;
    }
    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    <h3>
      Tired of boring lorem ipsum?
    </h3>
    <form
      className='lorem-form'
      onSubmit={handleSubmit}
    >
      <label htmlFor='amount'>
        paragraph:
      </label>
      <input 
      type='number' 
      name='amount' 
      id='amount'
      value={count}
      onChange={(event)=>{
        setCount(e.target.value)
      }}

      />
      <button 
      type='submit'
      className='btn'
      >Submit</button>

    </form>
    <article className='lorem-text'>
      {/* <p>lorem</p> */}
      {text.map( (item,index) =>{
        return(
          <p
          key={index}
          >
            {item}
          </p>
        )
      } )}
    </article>
  </section>
    )
}

export default App;
