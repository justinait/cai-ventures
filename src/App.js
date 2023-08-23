import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* <Route path='/' element={< Home />} /> */}
         
        cai ventures
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
