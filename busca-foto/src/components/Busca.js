import React, { Component } from 'react'

import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
  render() {
    return (
      <div className='flex flex-column'>
        <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'></InputIcon>
            <InputText 
                placeholder={this.props.dica}
                className='w-full py-3'
                ></InputText>
        </IconField>
        <Button
            label='Buscar'
            icon='pi pi-check'
            className='mt-3'
        ></Button>
      </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'O que deseja buscar?'
}