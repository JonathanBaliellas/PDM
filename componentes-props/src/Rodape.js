import React from 'react'

const Rodape = () => {
  return (
    <div className='text-bg-primary fixed-bottom'>
        <div className="d-flex p-3 pt-5 pb-5 justify-content-center">
            <div className="d-flex align-items-center">
                Pollito Computers
            </div>
            <div className="flex-grow-1 ms-3 justify-content-end">
                <i className="fa-brands fa-facebook btn text-white"></i>
                <i className="fa-brands fa-instagram btn text-white"></i>
                <i className="fa-brands fa-linkedin btn text-white"></i>
            </div>
        </div>
    </div>
  )
}

export default Rodape