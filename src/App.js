import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Hero />} />
        CAI VENTURES
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
