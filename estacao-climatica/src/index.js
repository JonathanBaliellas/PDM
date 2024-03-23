import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    // window.navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude)
    // })

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null,
            msgErro: null
        }
        console.log('constructor')
    }

    icones = {
        'Verão': 'fa-sun',
        'Inverno': 'fa-snowflake',
        'Primavera': 'fa-clover',
        'Outono': 'fa-tree'
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.obterLocalizacao()
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        // 21/06: inverno/verão
        // new Date(ano, mes(começa do 0), dia(começa do 1))
        const d1 = new Date(anoAtual, 5, 21)

        // 24/09: primavera/outono
        const d2 = new Date(anoAtual, 8, 24)

        // 21/12: verão/inverno
        const d3 = new Date(anoAtual, 11, 22)

        // 24/03: outono/primavera
        const d4 = new Date(anoAtual, 2, 21)

        // latitude < 0 ? se sim, true; senão (:) false
        // const sul = latitude < 0 ? true : false 
        const sul = latitude < 0 //bool que retorna true se latitude for negativa

        if (data >= d1 && data < d2) {
            return sul ? 'Inverno' : 'Verão'
        } else if (data >= d2 && data < d3) {
            return sul ? 'Primavera' : 'Outono'
        } else if (data >= d3 || data < d4) {
            return sul ? 'Verão' : 'Inverno'
        } else {
            return sul ? 'Outono' : 'Primavera'
        }
    }

    obterLocalizacao = () => {
        /*
            1. solicitar a localização do usuário usando getCurrentPosition
            2. Na função callback, fazer o seguinte:
                - Construir um novo Date (com new Date()) que representa a data atual
                - Chamar a função obterEstacao entregando a ela a latitude e a data atual, obtendo como resposta a estação climática
                - Utilizando o nome da estação climática obtido, acessar o objeto ícones para obter o nome do ícone
                - Usar a função chamada setState para atualizar o estado da aplicação
                    this.setState({... todos os valores de interesse aqui, como pares chave/valor})

                    bloco 2.8.1 da apostila 5

        */

        //1. solicitar a localização do usuário usando getCurrentPosition
        window.navigator.geolocation.getCurrentPosition(
            (position) => {//Função callback
                //2. Na função callback, fazer o seguinte:
                //- Construir um novo Date (com new Date()) que representa a data atual
                let dataAtual = new Date()
                let { latitude, longitude } = position.coords //desestruturado

                //- Chamar a função obterEstacao entregando a ela a latitude e a data atual, obtendo como resposta a estação climática
                let estacao = this.obterEstacao(dataAtual, latitude)

                //- Utilizando o nome da estação climática obtido, acessar o objeto ícones para obter o nome do ícone
                let icone = this.icones[estacao]

                /**
                 * - Usar a função chamada setState para atualizar o estado da aplicação
                    this.setState({... todos os valores de interesse aqui, como pares chave/valor})
                 */
                this.setState(
                    {
                        latitude: latitude,
                        longitude: longitude,
                        estacao: estacao,
                        data: dataAtual,
                        icone: icone
                    }
                )
                console.log(this.state)
            },
            (erro) => {
                this.setState(
                    {
                        msgErro: 'Tente novamente mais tarde'
                    }
                )
            }
        )

    }

    render() { //é preciso ter a função render, que não recebe parâmetros
        console.log('render')
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">
                        {/* Cartão do Bootstrap */}
                        <div className="card">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center border rounded mb-2"
                                    style={{ height: '6rem' }}
                                    >
                                    {/* Ícone */}
                                    <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
                                    <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
                                </div>
                                <div>
                                    <p className="text-center">
                                        {
                                            this.state.latitude ? 
                                                `Coordenadas: ${this.state.latitude}, ${this.state.longitude} \n 
                                                Data: ${this.state.data}` 
                                                :
                                                this.state.msgErro ?
                                                    `${this.state.msgErro}` 
                                                    :
                                                    `Clique no botão para saber a sua estação climática`
                                        }
                                    </p>
                                </div>
                                <button 
                                    className="btn btn-outline-primary w-100 mt-2"
                                    onClick={() => this.obterLocalizacao()}>
                                    Qual a minha estação?
                                </button>
                                <button 
                                    className='btn mt-2 btn-outline-danger w-100'
                                    onClick={() => {
                                        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
                                    }}>
                                        Desmontar (cuidado!)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)