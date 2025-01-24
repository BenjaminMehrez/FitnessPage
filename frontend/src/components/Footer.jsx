import React from "react";
import logo from '/logo.png'
import twitter from '/twitter.svg'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'

function Footer() {
    return (
        <footer className="bg-stone-950 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Logo y derechos de autor */}
                    <div className="text-center">
                        <img src={logo} alt="logo-footer" className="w-28 inline-block"/>
                        <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="text-center font-semibold">
                        <ul className="flex flex-col md:flex-row gap-4">
                            <li>
                                <a href="/about" className="link duration-300">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="link duration-300">
                                    Política de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="link duration-300">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Redes sociales */}
                    <div className="text-center">
                        <p className="text-sm">Síguenos:</p>
                        <div className="flex justify-center md:justify-end gap-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebook" className="w-6 h-6"/>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="twitter" className="w-6 h-6"/>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="instagram" className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
