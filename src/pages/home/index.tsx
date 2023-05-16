import PrimeiraDobra from './PrimeiraDobra'
import Nuvens1 from './Nuvens1'
import SegundaDobra from './SegundaDobra'
import TerceiraDobra from './TerceiraDobra'
import Nuvens2 from './Nuvens2'
import Footer from './Footer'
import Rasgo from './Rasgo'

export default function Home() {
    return <>
        <PrimeiraDobra />
        <Nuvens1 />
        <Rasgo id="rasgo1" />
        <SegundaDobra />
        <Rasgo id="rasgo2" />
        <Nuvens2 />
        <TerceiraDobra />
        <Footer />
    </>
}
