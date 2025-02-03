import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css'
import { Home, LoginSignupForm, ProductList } from './pages';
import TokenProvider from './context/TokenProvider';
import ToastPovider from './context/ToastPovider';
import DataProvider from './context/dataProvider';

function App() {


  return <BrowserRouter>
    <TokenProvider>
      <DataProvider>
        <ToastPovider>
          <div className='container mx-auto px-4 relative'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loginOrSignUp" element={<LoginSignupForm />} />
              <Route path="/productList" element={<ProductList />} />
            </Routes>
          </div>
        </ToastPovider>
      </DataProvider>
    </TokenProvider>
    <Footer />
  </BrowserRouter>
}

export default App
