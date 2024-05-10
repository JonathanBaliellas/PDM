import React from 'react'

const Feedback = ({funcaoOk, funcaoNOk, textoOk, textoNOk}) => {
    return (
        <div className='d-flex justify-content-evenly m-2'>
            {/* button[type=button].btn.btn- *2 
                Cria dois botões iguais, com as classes
            */}
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={funcaoOk}>
                {textoOk}
            </button>
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={funcaoNOk}>
                {textoNOk}
            </button>
        </div>
    )
}

export default Feedback