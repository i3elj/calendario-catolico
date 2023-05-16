import { Link } from 'react-router-dom'

import Logo from '../../../components/Logo'
import mockup from './assets/mockup.png'
import './style.css'

function PrimeiraDobra() {
    return (
        <div className="dobra" id="P-dobra">
            <Logo />
            <section id="P-dobra__anuncio">
                <div id="P-dobra__copy">
                    <h2>INSCRIÇÕES ENCERRADAS</h2>
                    <p>Que pena, as vendas do kit o básico do que todo católico precisa saber foram encerradas. Mas você pode se cadastrar na lista de espera para ser avisado em primeira mão quando houver uma nova abertura de vendas.</p>
                    <h3>Cadastre-se seus dados aqui em baixo:</h3>
                    <div id="P-dobra__form">
                        <input type="text" name="nome" placeholder="Nome" />
                        <input type="email" name="email" placeholder="Email" />
                        <Link to='obrigado'>SIM, EU QUERO ME INSCREVER</Link>
                    </div>
                    <span>*Você receberá uma confirmação por e-mail, abra-o e favorite-o para não perder nenhuma novidade.</span>
                </div>
                <img id="P-dobra__imagem" src={mockup} />
            </section>
        </div >
    )
}

export default PrimeiraDobra
