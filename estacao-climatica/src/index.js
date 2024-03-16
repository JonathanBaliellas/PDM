import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    // window.navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude)
    // })

    constructor(props){
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null
        }
    }

    icones = {
        'Verão': 'fa-sun',
        'Inverno': 'fa-snowflake',
        'Primavera': 'fa-canadian-maple-leaf',
        'Outono': 'fa-tree'
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
        }else if(data >= d2 && data < d3){
            return sul ? 'Primavera' : 'Outono'
        }else if(data >= d3 || data < d4){
            return sul ? 'Verão' : 'Inverno'
        }else{
            return sul ? 'Outono' : 'Primavera'
        }


    }

    render(){ //é preciso ter a função render, que não recebe parâmetros
        return <div>Oi</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)