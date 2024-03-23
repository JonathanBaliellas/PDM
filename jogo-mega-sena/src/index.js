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
        for(let i = 0; i < 6; i++){
            this.state.num[i] = Math.ceil(Math.random() * 60)
        }
    }

    render() {
        const cardSorteio = []
        for(let i = 0; i < 6; i++){
            cardSorteio.push(
                <div className="p-4 bg-success border col-1" key={i}>{this.state.num[i]}</div>
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
                            <button className="btn btn-outline-success mt-2 col-10">
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