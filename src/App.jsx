import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css'
import Home from './pages/Home';

function App() {
  

  return <BrowserRouter>
    <div className='container mx-auto px-4 relative'>
      <Header />
      <Routes>
        <Route path="/fashion/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
}

export default App
