import { useState } from 'react'
// import icon from './assets/images/icon-music.svg'
import './App.css'

import OrderSummary from './components/OrderSummary'

function App() {

  return (
    <div className=" ">
      {/* CONTENEDOR PRINCIPAL */}
      <main className="container">
        {/* CARD */}
        <div className="card">
          {/* CARD HEADER */}
          <div className="card_header">
            {/* IMAGEN POR CSS BACKGROUND */}
          </div>
          {/* ZONA DE CONTENIDO */}
          <section className="card_content">
            <h1 className="card_title">Order Summary</h1>
            <p className="card_parag">
              You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!
            </p>
            {/* ZONA DE PLAN ANUAL */}
            <div className="card_plan">
              <div className="card_plan_container">
                <figure>
                  <img src="./assets/images/icon-music.svg" alt="music icon" />
                  <div>
                    <h2 className="card_plan_title">Annual Plan</h2>
                    <p className="card_plan_price">$59.99/year</p>
                  </div>
                </figure>
                <a href="#">Change</a>
              </div>
            </div>
            {/* BOTÓN */}
            <button className="card_btn">Proceed to Payment</button>
            <a className="btn_cancel" href="#">Cancel Order</a>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App;
