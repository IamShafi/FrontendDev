import React from 'react'
import MainImg from '../assets/images/illustration-hero.svg'
import Icon from '../assets/images/icon-music.svg'
// import './OrderSummary.module.css'
const OrderSummary = () => {
  return (
    
    
      <div className="container w-95 sm:max-w-[450px] sm:min-w-350px h-[570px] sm:h-[696px]  
      flex justify-center items-center
      bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(../assets/images/pattern-background-desktop.svg)' }}>



        {/* CARD */}
        <div className="card flex flex-wrap justify-center bg-white rounded-[20] shadow-lg text-center"
        style={{ boxShadow: "0 40px 30px -10px rgba(23, 65, 97, 0.1)" }}>

            
          {/* CARD HEADER */}
          <div className="w-full h[160px] sm:h-[220px] bg-cover bg-top bg-no-repeat transition-all duration-400 "
          style={{  }}>
            {/* IMAGEN POR CSS BACKGROUND */}
            <img src={MainImg} alt="hero image" />
          </div>





          {/* ZONA DE CONTENIDO */}
          <section className="CardContent w-full h-[480px] px-[2rem] sm:px-[3rem] py-[1.5rem] sm:py-[2.9rem] flex flex-col transition-all duration-400">
            <h1 className="mb-4 text-center font-[900] text-[1.3rem] sm:text-[1.75rem] "
            style={{ color: 'hsl(223, 47%, 23%)' }}
            >Order Summary</h1>
            <p className="text-center text-[.92rem] mb-3 text-base leading-6"
            style={{ color: 'hsl(224, 23%, 55%)' }}
            >
              You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!
            </p>


            {/* ZONA DE PLAN ANUAL */}
            <div className="CardPlan w-full h-[100px] mb-[1.5rem] py-0 px-[1.5rem] flex justify-between items-center"
            
            style={{ backgroundColor: `hsl(225, 100%, 98%)` }} 
            >

              <div className="CardPlanContainer w-full h-24 px-6 mb-8 flex items-center justify-between text-left  rounded-lg"

                
               >
                <figure className='flex'>
                  <img src={Icon} alt="music icon" />
                  <div className='ml-3'>
                    <h2 className="CardPlan-Title text-[1.02rem] mb-[.2rem]" 
                    style={{ color: 'hsl(223, 47%, 23%)' }}
                    >Annual Plan</h2>
                    <p className="CardPlan-Price text-[1.05rem] "
                    style={{ color: 'hsl(224, 23%, 5%)' }}
                    >$59.99/year</p>
                  </div>
                </figure>
                <a href="#"
                className='Card-BTN font-bold text-sm transition-all duration-200 ease-out  hover:no-underline'
                style={{ color: 'hsl(245, 75%, 52%)',
               
                "hover":{
                    color: 'hsla(245, 75%, 52%, .5)',
                }
             }}
                >Change</a>
              </div>
            </div>
            {/* BOTÓN */}
            <button className="w-full py-2 mb-8 text-white  border-none rounded-[12px] font-semibold text-sm shadow-btn cursor-pointer transition-all duration-200 ease-out"
            style={{ backgroundColor: `hsl(245, 75%, 52%)`,
            boxShadow: `0 20px 20px 0px rgba(39, 10, 170, 0.17)`,
            ":hover": {
                backgroundColor: `hsla(245, 75%, 52%, .5)`,
              }, }}>Proceed to Payment</button>
            <a className="text-hsl-224-23-55 no-underline font-bold text-base transition-all duration-200 ease-out hover:text-hsl-223-47-23" href="#">Cancel Order</a>
          </section>
        </div>
      </div>


  )
}

export default OrderSummary
