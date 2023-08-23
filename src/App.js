import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './navbar/navbar';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={< Hero />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
