import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css'
import { Home, LoginSignupForm } from './pages';
import TokenProvider from './context/TokenProvider';
import { ToastContainer } from 'react-toastify';

function App() {


  return <BrowserRouter>
    <ToastContainer />
    <TokenProvider>
      <div className='container mx-auto px-4 relative'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginOrSignUp" element={<LoginSignupForm />} />
        </Routes>
      </div>
    </TokenProvider>
    <Footer />
  </BrowserRouter>
}

export default App
