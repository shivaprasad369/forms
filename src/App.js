
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutContain from './Components/ABout.jsx/AboutContain';
import BlogContainer from './Components/BLog/BlogContainer';
import BlogsDetail from './Components/BlogDetails/BlogsDetail.jsx'
import ContactContainer from './Components/Contact/ContactContainer.jsx'
import Collections from './Components/Collection/Collections.jsx'
import Contains from './Components/ProductDetails/Contains.jsx'
import Career from './Components/Carrer/Career.jsx';
import Contain from './Components/Team/Contain.jsx';
function App() {
  
  return (
    <>
    <BrowserRouter>
   
    <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/about' element={<AboutContain/>} />
     <Route path='/blog' element={<BlogContainer/>} />
     <Route path='/career' element={<Career/>} />
     <Route path='/team' element={<Contain/>} />


     <Route path='/blog/:id' element={<BlogsDetail/>} />
     <Route path='/contact' element={<ContactContainer/>} />
     <Route path='/products' element={<Collections/>} />
     <Route path='/products/:id/:type/:name' element={<Contains/>} />


    </Routes>

    </BrowserRouter>
  
    </>
  );
}

export default App;
