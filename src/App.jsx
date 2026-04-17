import Navbar from './Navbar' 
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
    <div>
      <Navbar />
      <Welcome />
      <Boxes />
    <StrategySec />
    <Technology />
     <GroundBreaking />
    <LatestArticle />
    <SubscribeNew />
    <Footer />
    </div> 
  )
}

export default App
