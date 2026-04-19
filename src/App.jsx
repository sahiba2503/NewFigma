
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact"; 
import './App.css'
import Welcome from './Welcome'
import Boxes from './Boxes'
import StrategySec from './StrategySec'
import Technology from './Technology'
import GroundBreaking from './GroundBreaking'
import LatestArticle from './LatestArticle'
import SubscribeNew from './SubscribeNew'
import Footer from './Footer'



function App() {
  return (
      <BrowserRouter>
         <Navbar />

      <Welcome />
      <Boxes />
     <StrategySec />
    <Technology />
     <GroundBreaking />
     <LatestArticle />
     <SubscribeNew />
     <Footer />

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
