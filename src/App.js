import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/navbar/navbar';
import Services from './components/services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Faq from './components/Faq/Faq';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
