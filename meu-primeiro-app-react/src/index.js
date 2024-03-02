import React from "react";
import ReactDOM from "react-dom";
import './style.css'

const NomeDisciplina = () => {
    return(
        <span>Programação para Dispositivos Móveis</span>
    );
}

const NomeCompleto = () => {
    return(
        <span>Jonathan Baliellas</span>
    )
}

const App = () => {
    //deve retornar o que será exibido (elemento html)
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'}
    const textoRotulo = 'Nome:'
    const obterTextoBotao = () => {
        return 'Enviar'
    }
    const fuiClicado = () => {
        alert('Cliquei')
    }

    return(
        // expressão JSX (JavaScript Extension)
        //No contexto JSX não se pode escrever expressões JS. Para fazer isso, é preciso usar {}.
        <div style={{margin: 'auto', width: 768, backgroundColor: '#eee', padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor='nome' style={{display: 'block', marginBottom: 4}}>{textoRotulo}</label>
            <input htmlFor='text' id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
            <button style={estilosBotao} onClick={fuiClicado}>Enviar</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);