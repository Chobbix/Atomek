import React from 'react'
import './Estilos/Crear_grupo_syle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Crear_grupo = () => {
    return (
        <div className='publicar'>
            <input class="form-control form-control-lg" type="text" placeholder="Nombre del grupo" aria-label=".form-control-lg example" />
            <input class="form-control" type="text" placeholder="Descripcion del grupo" aria-label="default input example" />
            <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">Categoria...</option>
                <option>Dibujo</option>
                <option>Costura</option>

            </select>
            <form class="row g-3">

                <div class="col-auto">
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Crear categoria" />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn-plus "><FontAwesomeIcon icon={faPlus} /> </button>
                </div>
                <div class="d-grid gap-2">
                    <button class=" btn-img" type="button">Crear grupo</button>
                </div>
            </form>
        </div>
    )
}

export default Crear_grupo