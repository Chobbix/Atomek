import React from 'react'
import './Estilos/Response_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const ErrorContent = (props) => {
    return (
        <div className="Response-Container" id="Registro">
            <div className="tarjetamuro ">
                <div className="cardheader row">
                    <h1 className='text-center cardtext'>{"Algo salió mal :'("}</h1>
                    <h1 className='text-center cardtext'><FontAwesomeIcon icon={faBan} /></h1>
                </div>

                <div className="card-body row">
                    <h4 className='text-center card-note'>{"Porfavor deja de jugar con el URL de la pagina y regresa al inicio"}</h4>
                </div>
            </div>
        </div>
    )
}

export default ErrorContent