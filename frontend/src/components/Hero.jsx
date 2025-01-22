import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <>
        <section className="hero h-screen">
            <Header/>
            <div className='relative top-60 flex gap-10 flex-col items-center'>
                <h1 className="font-bold text-white text-3xl" >Comienza tu transformación.</h1>
                <button className='font-bold text-white border py-2 px-8 rounded-lg bg-stone-900'>START</button>
            </div>
        </section>
    </>
  )
}

export default Hero