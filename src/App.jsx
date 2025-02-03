import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css'
import { Home, LoginSignupForm, ProductList } from './pages';
import DataProvider from './context/dataProvider';
import { ToastContainer } from 'react-toastify';

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
          </Routes>
        </div>
      </DataProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
