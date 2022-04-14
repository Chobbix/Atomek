import React, { useState, useEffect } from 'react'
import './Estilos/Crear_grupo_syle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { CategoryCreate, CategoryGetAll } from '../services/CategoryServices'
import { CommunityCreate, communityAddUser } from '../services/CommunityServices'

const Crear_grupo = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [category_id, setCategory_id] = useState('');

    const [categories, setCategories] = useState([]);
    const [userSesion, setUserSesion] = useState();

    async function getUserSesion() {
        setUserSesion(JSON.parse(localStorage.getItem("UserSession")));
    }

    async function getAllCategories() {
        try {
            const data = await CategoryGetAll();
            setCategories(data);
        }
        catch(err) {
            console.log(err);
        }
    }

    const handleCreateCategory = async (event) => {
        try {
            await CategoryCreate({
                title: category
            });
            getAllCategories();
            setCategory('');
            console.log("categoria registrada con exito");
        }
        catch(err) {
            console.log(err);
        }
    }

    const handleCreateCommunity = async (event) => {
        try {
            const communityResponse = await CommunityCreate({
                name: name,
                description: description,
                _category: category_id
            });

            await communityAddUser({
                communityId: communityResponse._id,
                id: userSesion._id
            });

            console.log("comunidad registrada con exito");
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllCategories();
        getUserSesion();
    }, []);

    return (
        <div className='publicar'>
            <input class="form-control form-control-lg" type="text" value={name} 
                onChange={({target}) => setName(target.value)} 
                placeholder="Nombre del grupo" aria-label=".form-control-lg example" />
            <input class="form-control" type="text" value={description} 
                onChange={({target}) => setDescription(target.value)} 
                placeholder="Descripcion del grupo" aria-label="default input example" />
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
                    <button class="btn-img" type="button"
                        onClick={handleCreateCommunity}>Crear grupo</button>
                </div>
            </form>
        </div>
    )
}

export default Crear_grupo