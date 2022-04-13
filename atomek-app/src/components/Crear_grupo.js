import React, { useState, useEffect } from 'react'
import './Estilos/Crear_grupo_syle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { CategoryCreate, CategoryGetAll } from '../services/CategoryServices'
import { useNavigate } from 'react-router-dom'

const Crear_grupo = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [category_id, setCategory_id] = useState('');

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await CategoryGetAll();
            setCategories(data);

            console.log(categories);
        }
    
        fetchData();
    }, []);

    const handleCreateCategory = async (event) => {
        console.log(category_id);
        try {
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='publicar'>
            <input class="form-control form-control-lg" type="text" placeholder="Nombre del grupo" aria-label=".form-control-lg example" />
            <input class="form-control" type="text" placeholder="Descripcion del grupo" aria-label="default input example" />
            <select class="form-select" onChange={({target}) => setCategory_id(target.value)} id="validationDefault04" required>
                <option selected disabled value="">Categoria...</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat._id}>{cat.title}</option>
                ))}

            </select>
            <form class="row g-3">

                <div class="col-auto">
                    <input type="text" value={category} 
                        onChange={({target}) => setCategory(target.value)} 
                        class="form-control" id="inputPassword2" placeholder="Crear categoria" />
                </div>
                <div class="col-auto">
                    <button type="button" class="btn-plus" 
                        onClick={handleCreateCategory}><FontAwesomeIcon icon={faPlus} /> </button>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn-img" type="button">Crear grupo</button>
                </div>
            </form>
        </div>
    )
}

export default Crear_grupo