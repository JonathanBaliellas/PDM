import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import ListaImagens from './ListaImagens'

export default class App extends React.Component{
// const App = () => {
  state = {
    photos: []
  }

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    }).then(result => {
      this.setState({photos: result.photos})
    })
  }

  render(){
    return (
      <div
        className='grid justify-content-center border-round border-1 border-400'>
          <div className="col-12">
              <h1>Exibir uma lista de...</h1>

          </div>
          <div className="col-12 md:col-8 lg:col-6">
              <Busca
                onBuscaRealizada={this.onBuscaRealizada}
                classNameInputText="col-12 md:col-6"
                classNameButton=""
              ></Busca>
          </div>
          <div className="col-12">
            <ListaImagens 
              photos={this.state.photos}
            />
          </div>
      </div>
    )
  }
}

// export default App