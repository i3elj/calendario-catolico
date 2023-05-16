import Logo from "../../components/Logo"
import WhatsAppIcon from './WhatsAppIcon'
import nuvem from '../../assets/nuvem.png'
import './style.css'

export default function Obrigado() {
    return <>
        <main id="obrigado">
            <Logo />
            <div id="title"><h1>OBRIGADA POR SE INSCREVER</h1></div>
            <h3>Falta pouco para você garantir o acesso em primeira mão da abertura das vendas.</h3>
            <p>Aperte o botão abaixo  e entre no grupo do WhatsApp, iremos dar todos os avisos por lá!</p>
            <button id="botao">
                <WhatsAppIcon />
                <h2>Quero entrar no grupo</h2>
            </button>
        </main>
        <img id="nuvem7" src={nuvem} />
        <img id="nuvem8" src={nuvem} />
    </>
}
