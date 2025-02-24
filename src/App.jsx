import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css'
import { Home, LoginSignupForm, ProductList } from './pages';
import { ToastContainer } from 'react-toastify';
import DataProvider from './context/DataProvider';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';

function App() {


  return (
    <BrowserRouter>
      <DataProvider>
        <ToastContainer />
        <div className='container mx-auto px-4 relative'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginOrSignUp" element={<LoginSignupForm />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/productDetail" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </DataProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
