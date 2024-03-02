import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                {/* Isto é um comentário */}
                {/* h1.display-t.text-center{Seus Pedidos} */}
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
        </div>

        {/* Linha para os pedidos */}
        <div className="row">
            {/* Primeiro pedido */}
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-hard-drive fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <h4 className="text-center">HD</h4>
                            <p className="text-center">HD 1 TB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-memory fa-2x fa-bounce"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <h4 className="text-center">Memória RAM</h4>
                            <p className="text-center">Memória 16 GB DDR4</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-mouse fa-2x fa-flip"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <h4 className="text-center">Mouse</h4>
                            <p className="text-center">Mouse Normal</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-keyboard fa-2x fa-shake"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <h4 className="text-center">Teclado</h4>
                            <p className="text-center">Teclado BR ABNT2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
