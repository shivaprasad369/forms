import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Professional from './Professional';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/admin" element={<Admin/>}/>
 
    </Routes>
    </BrowserRouter>
  
    {/* <Professional/> */}
    </>
  );
}

export default App;
