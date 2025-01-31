import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import  Navigation  from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Aboutus from './pages/Aboutus'
import Footer from './components/Footer'


function App() {
    return (

        <BrowserRouter>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/" element={<Products />} />
                    <Route path="/aboutus/" element={<Aboutus />} />
                    <Route path="/contact/" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>


    )
}

export default App
