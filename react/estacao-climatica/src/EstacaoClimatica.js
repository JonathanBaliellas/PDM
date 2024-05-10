import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EstacaoClimatica extends Component {
  timer = null
  state = {
    data: null

  }

  componentDidMount(){
    this.timer = setInterval(() => {//aloca o timer no sistema
      this.setState({data: new Date().toLocaleTimeString()}) //recebe a data do sistema e atualiza a cada 1000 ms
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer) //desaloca o timer do sistema
  }
  render() {
    console.log('render')
    return (
      <div className="card">
        <div className="card-body">
            <div
                className="d-flex align-items-center border rounded mb-2"
                style={{ height: '6rem' }}
                >
                {/* Ícone */}
                <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
                <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
            </div>
            <div>
                <p className="text-center">
                    {
                        this.props.latitude ? 
                            `Coordenadas: ${this.props.latitude}, ${this.props.longitude} \n 
                            Data: ${this.state.data}` 
                            :
                            this.props.msgErro ?
                                `${this.props.msgErro}` 
                                :
                                `Clique no botão para saber a sua estação climática`
                    }
                </p>
            </div>
            <button 
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => this.props.obterLocalizacao()}>
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
    )
  }
}
