import React, { Component } from 'react'

import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    // console.log(event.target.value)
    this.setState({termoDeBusca: event.target.value})
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField iconPosition='left'>
              <InputIcon className='pi pi-search'></InputIcon>
              <InputText 
                  value={this.state.termoDeBusca}
                  placeholder={this.props.dica}
                  className='w-full py-3'
                  onChange={this.onTermoAlterado}
                  ></InputText>
          </IconField>
          <Button
              label='Buscar'
              icon='pi pi-check'
              className='mt-3'
          ></Button>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
    dica: 'O que deseja buscar?'
}