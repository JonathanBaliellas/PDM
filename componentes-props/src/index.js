import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './pedido'
import Cartao from './Cartao'
import Rodape from './Rodape'
import Feedback from './Feedback'

const App = () => {
    // Guardando o jsx (?) em uma constante
    const feedback = <Feedback
        textoOk={"Chegou"}
        textoNOk={"Não chegou"}
        funcaoOk={() => alert("Obrigado pelo feedback")}
        funcaoNOk={() => alert("Verificaremos o que houve")}
    />
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                {/* Isto é um comentário */}
                {/* h1.display-t.text-center{Seus Pedidos} */}
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
        </div>

        {/* Linha para os pedidos */}
        <div className="row">
            {/* Primeiro pedido */}
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2023">
                    <Pedido
                        iconeNome="fa-memory"
                        iconeEfeito="fa-bounce"
                        titulo="Memória RAM"
                        descricao="16 GB"
                    />
                    {/* Feedback criado direto no componente */}
                    <Feedback
                        textoOk={"Chegou"}
                        textoNOk={"Não chegou"}
                        funcaoOk={() => alert("Obrigado pelo feedback")}
                        funcaoNOk={() => alert("Verificaremos o que houve")}
                    />
                </Cartao>

            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2023">
                    <Pedido
                        iconeNome="fa-hdd"
                        iconeEfeito="fa-shake"
                        titulo="HD"
                        descricao="1 TB"
                    />
                    {/* Usando a constante criada */}
                    {feedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2023">
                    <Pedido
                        iconeNome="fa-mouse"
                        iconeEfeito="fa-flip"
                        titulo="Mouse"
                        descricao="Mouse sem fio"
                    />
                    {feedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2023">
                    <Pedido
                        iconeNome="fa-keyboard"
                        iconeEfeito="fa-fade"
                        titulo="Teclado"
                        descricao="Teclado sem fio"
                    />
                    {feedback}
                </Cartao>
            </div>
        </div>

        <div className="row">
            {/* Exibir um nome de empresa que você vai inventar e pelo menos três ícones de redes sociais */}
            <Rodape></Rodape>
        </div>
    </div>

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
