
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact"; 
import './App.css'
function App() {
  return (
  
      <BrowserRouter>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
   
  )
}

export default App
