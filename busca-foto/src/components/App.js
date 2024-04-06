import React from 'react'
import Busca from './Busca'

const App = () => {
  return (
    <div
        className='grid justify-content-center border-round border-1 border-400'>
            <div className="col-12">
                <h1>Exibir uma lista de...</h1>

            </div>
            <div className="col-12 md:col-8 lg:col-6">
                <Busca></Busca>

            </div>
    </div>
  )
}

export default App