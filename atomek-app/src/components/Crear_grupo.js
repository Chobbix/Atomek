import React from 'react'
import './Estilos/Crear_grupo_syle.css'
const Crear_grupo = () => {
    return (
        <div>
            <input class="form-control form-control-lg" type="text" placeholder="Nombre del grupo" aria-label=".form-control-lg example" />
            <input class="form-control" type="text" placeholder="Descripcion del grupo" aria-label="default input example" />
            <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">Categoria...</option>
                <option>Dibujo</option>
                <option>Costura</option>
            </select>
        </div>
    )
}

export default Crear_grupo