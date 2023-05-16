import guia from './assets/GuiaExemplo.png'
import calendario from './assets/CalendarioExemplos.png'
import nuvem from '../../../assets/nuvem.png'

import './style.css'

export default function TerceiraDobra() {
    return (
        <div className="dobra" id="T-dobra">
            <section id="T-dobra__section-1">
                <img src={calendario} />
                <p><b>O calendário possui</b> as datas mais importantes da igreja, incluindo: Dias de festas, dias de santos e solenidades além do evangelho do dia.</p>
            </section>
            <section id="T-dobra__section-2">
                <img src={guia} />
                <p><b>O guia da Missa possui</b> um roteiro do que acontece em cada momento da missa de maneira simples, para você saber o mínimo do que está acontecendo em cada parte da missa.</p>
            </section>
            <img src={nuvem} className="nuvem" id="nuvem4"/>
            <img src={nuvem} className="nuvem" id="nuvem5"/>
            <img src={nuvem} className="nuvem" id="nuvem6"/>
        </div>
    )
}
