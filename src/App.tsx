import './App.css'

import PrimeiraDobra from './components/PrimeiraDobra'
import Nuvens1 from './components/Nuvens1'
import SegundaDobra from './components/SegundaDobra'
import TerceiraDobra from './components/TerceiraDobra'
import Nuvens2 from './components/Nuvens2'
import Footer from './components/Footer'
import Rasgo from './components/Rasgo'

const App = () => <>
  <PrimeiraDobra />
  <Nuvens1 />
  <Rasgo id="rasgo1" />
  <SegundaDobra />
  <Rasgo id="rasgo2" inverter={true} />
  <Nuvens2 />
  <TerceiraDobra />
  <Footer />
</>

export default App
