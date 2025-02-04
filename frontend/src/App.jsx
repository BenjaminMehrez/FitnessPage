import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation  from './components/Navigation'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import AboutusPage from './pages/AboutusPage'
import Footer from './components/Footer'
import ProductCreatePage from './pages/ProductCreatePage'


function App() {
    return (

        <BrowserRouter>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products/" element={<ProductsPage />} />
                    <Route path="/aboutus/" element={<AboutusPage />} />
                    <Route path="/contact/" element={<ContactPage />} />
                    <Route path="/product-create/" element={<ProductCreatePage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>


    )
}

export default App
