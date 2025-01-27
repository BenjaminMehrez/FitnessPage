import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (

            <section className="hero h-screen flex flex-col items-center justify-center text-center text-white gap-10">
                <h1 className="text-xl md:text-5xl font-bold">Transforma tu vida con fitness</h1>
                <p className="w-60 md:text-lg">Encuentra los mejores productos para tu rutina</p>
                <Link to="/products" className="btn mt-10 bg-white text-black px-6 py-3 rounded-lg font-bold">
                    Explorar productos
                </Link>
            </section>
    )
}

export default Hero