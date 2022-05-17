import React, { useState, useEffect } from 'react'
import './Estilos/Crear_grupo_syle.css'
import ErrorMessage from './ErrorMessage';
import CategoryCreationForm from './CategoryCreationForm';
import { CategoryGetAll } from '../services/CategoryServices'
import { CommunityCreate, communityAddUser } from '../services/CommunityServices'
import { useForm } from 'react-hook-form';
import { communitySchema } from '../validations/CommunitySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const Crear_grupo = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(communitySchema)
    });

    const [categories, setCategories] = useState([]);
    const [userSesion, setUserSesion] = useState();
    const Navigate = useNavigate();

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

    const handleCreateCommunity = async (data) => {
        try {
            data._admin = userSesion._id;
            const communityResponse = await CommunityCreate(data);

            // Add current user to its own created Community
            await communityAddUser({
                communityId: communityResponse._id,
                id: userSesion._id
            });

            console.log("comunidad registrada con exito");
            Navigate('/atomek/Community/'+ communityResponse._id +'/View-Admin')
        }
        catch(err) {
            console.log(err);
        }
    }

    const onCategoryCreation = (data) => {
        getAllCategories();
    };

    useEffect(() => {
        getAllCategories();
        getUserSesion();
    }, []);

    return (
        <div className='publicar'>
            <form id='communityForm' onSubmit={handleSubmit(handleCreateCommunity)}>
                <input class="form-control form-control-lg" type="text"
                    placeholder="Nombre del grupo" aria-label=".form-control-lg example" {...register("name")} />
                {errors.name && <ErrorMessage message={errors.name.message} />}
                <input class="form-control" type="text"
                    placeholder="Descripcion del grupo" aria-label="default input example" {...register("description")} />
                {errors.description && <ErrorMessage message={errors.description.message} />}
                <select class="form-select" id="validationDefault04" {...register("_category")} >
                    <option selected disabled value="">Categoria...</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat._id}>{cat.title}</option>
                    ))}
                </select>
                {errors._category && <ErrorMessage message={errors._category.message} />}
            </form>
            <div class="row g-3">
                <CategoryCreationForm onCreation={onCategoryCreation} />
                <div class="d-grid gap-2">
                    <button class="btn-img" type="submit" form='communityForm'>Crear grupo</button>
                </div>
            </div>
        </div>
    )
}

export default Crear_grupo