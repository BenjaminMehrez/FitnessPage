import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation  from './components/Navigation'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import AboutusPage from './pages/AboutusPage'
import Footer from './components/Footer'
import ProductCreatePage from './pages/ProductCreatePage'
import ProductPage from './pages/ProductPage'


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
                    <Route path="/products/:id/" element={<ProductPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>


    )
}

export default App
