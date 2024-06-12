
import './App.css';
import Form from './Form';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Footer from './Footer';
import Tearm from './Tearm';
import Privacy from './Privacy';
import Refund from './Refund';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/terms" element={<Tearm/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/refund" element={<Refund/>}/>


    </Routes>
  <Footer/>
    </BrowserRouter>
    {/* <Professional/> */}
    </>
  );
}

export default App;
