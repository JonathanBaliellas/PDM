import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexels.Client'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'

export default class App extends React.Component{
// const App = () => {
  state = {
    photos: []
  }

  // pexelsClient = null

  // componentDidMount(){
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo
  //   }).then(result => {
  //     this.setState({photos: result.photos})
  //   })
  // }

  onBuscaRealizada = async (termo) =>{
    const result = await pexelsClient.get('/search', {
      params: {query: termo}
    })
    this.setState({photos: result.data.photos})
  }

  render(){
    return (
      <div
        className='grid justify-content-center border-round border-1 border-400'>
          <div className="col-12">
            <PexelsLogo />
          </div>
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
            <div className="grid">
              <ListaImagens 
                imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}
                photos={this.state.photos}
              />
            </div>
          </div>
      </div>
    )
  }
}

// export default App