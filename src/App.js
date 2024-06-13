
import './App.css';
import Form from './Form';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Footer from './Footer';
import Tearm from './Tearm';
import Privacy from './Privacy';
import Refund from './Refund';
import Header from './Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>>
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
