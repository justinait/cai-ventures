import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
        {/* <Route path='/' element={< Home />} /> */}
       <Services/>
        
      {/* </Routes> */}
    </BrowserRouter>
    
  );
}

export default App;
