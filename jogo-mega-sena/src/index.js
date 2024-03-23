import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            num: []
        }
    }

    gerarNum = () => {
        let num = []
        for(let i = 0; i < 6; i++){
            let sorteio = Math.ceil(Math.random() * 60)
            while(num.includes(sorteio)){
                sorteio = Math.ceil(Math.random() * 60)
            }
            num.push(sorteio)
        }
        this.setState(
            {
                num: num
            }
        )
    }

    componentDidMount(){
        this.gerarNum()
    }

    render() {
        const cardSorteio = []
        for(let i = 0; i < 6; i++){
            cardSorteio.push(
                <div className="px-2 py-2 bg-success border col-1 text-center" key={i}>{this.state.num[i]}</div>
            )
        }

        return (
            <div className="container mt-2">
                <div className="col-sm-12 col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Mega Sena
                        </div>
                        <div className="card-body row justify-content-center">
                            {cardSorteio}
                            <button 
                                className="btn btn-outline-success mt-2 col-10"
                                onClick={() => this.gerarNum()}>
                                Gerar jogo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)