import React from 'react' //imr
import ReactDOM from 'react-dom' //imrd
import App from './components/App'

import 'primereact/resources/primereact.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)