import React from 'react'

const Pedido = (props) => {
    return (
        // .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex

            <div className="d-flex">
                <div className="d-flex align-items-center">
                    {/* Colocamos o valor className entre chaves para poder usar uma interpolação (${}) JS recebendo o ícone e efeito passado pelo objeto props*/}
                    <i className={`fa-solid fa-2x ${props.iconeNome} ${props.iconeEfeito}`}></i>
                </div>
                <div className="flex-grow-1 ms-3 border">
                    <h4 className="text-center">{props.titulo}</h4>
                    <p className="text-center">{props.descricao}</p>
                </div>
            </div>

    )
}

export default Pedido