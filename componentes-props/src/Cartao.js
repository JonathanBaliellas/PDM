import React from 'react'

const Cartao = (props) => {
    const { } = props //Desestruturando
    return (
        // .card>.card-header.text-muted+.card-body
        <div className="card mb-2">
            <div className="card-header text-muted">{props.cabecalho}</div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Cartao