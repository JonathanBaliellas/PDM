import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    // window.navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position.coords.latitude)
    // })
    render(){ //é preciso ter a função render, que não recebe parâmetros
        return <div>Oi</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)