import "./style.css"
import guia from './assets/Capa - Guia.png'
import calendario from './assets/Capa - Calendário.png'

export default function SegundaDobra() {
    return (
        <div className="dobra" id="S-dobra">
            <section id="S-dobra__section-1">
                <h1>PRA QUEM É O BÁSICÃO DO CATÓLICO?</h1>
                <p>Para todo aquela pessoa que acabou de se converter ou para aquele católico que ainda não conhece como funciona a missa e se sente muitas vezes perdido, como se a missa fosse algo de outro mundo.</p>
            </section>
            <section id="S-dobra__section-2">
                <h1>E O QUE EU LEVO AO ADQUIRIR O KIT?</h1>
                <div>
                    <img id="calendario" src={calendario} />
                    <p>Calendário 2023</p>
                </div>
                <div>
                    <img id="guia" src={guia} />
                    <p>Guia da Missa</p>
                </div>
            </section>
        </div>
    )
}
