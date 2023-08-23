import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Hero />} />
        CAI VENTURES
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
