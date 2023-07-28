import "./style.css"
import guia from './assets/Capa - Guia.png'
import calendario from './assets/Capa - Calendário.png'

export default function SegundaDobra() {
  return (
    <div className="dobra" id="S-dobra">
      <section id="S-dobra__section-1">
        <h1>PRA QUEM É O BÁSICÃO DO CATÓLICO?</h1>
        <p>Que pena, as vendas do kit “O básico que todo Católico precisa saber” foram encerradas. Mas você pode se cadastrar na lista de espera para ser avisado, em primeira mão, quando disponibilizarmos o produto novamente.</p>
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
