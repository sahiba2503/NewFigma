import Navbar from './Navbar' 
import './App.css'
import Welcome from './Welcome'
import Boxes from './Boxes'
import StrategySec from './StrategySec'
import Technology from './Technology'
import GroundBreaking from './GroundBreaking'
import LatestArticle from './LatestArticle'

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Boxes />
    <StrategySec />
    <Technology />
    <StrategySec />
    <GroundBreaking />
    <LatestArticle />
    </div> 
  )
}

export default App
