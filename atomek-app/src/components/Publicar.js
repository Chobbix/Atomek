import React from 'react'
import './Estilos/Publicar_style.css'


const Publicar = () => {
    return (
        <div className='publicar'>

            <div className='cabezera'>
                <div className='Bloque'>
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="size rounded-circle"></img>
                </div>
                <div className='Bloque'>
                    <h5>Pedrito</h5>
                    <div className='Forms'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Grupo:</option>
                            <option value="1"> Los artistas desnutridos</option>
                            <option value="2">Dormilones</option>
                            <option value="3">no puedo subir las escaleras </option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Racha:</option>
                            <option value="1"> Semana de ensalada</option>
                            <option value="2">Semana oriental</option>
                            <option value="3"> No papitas </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Descripcion</label>

                <div class="grid ">
                    <div class="custom-file">
                        <input type="file" class="inputfile" id="customFile" />

                    </div>
                </div>

            </div>
            <div class="d-grid gap-2">
                <button class=" btn-img" type="button">Publicar</button>
            </div>
        </div>
    )
}

export default Publicar