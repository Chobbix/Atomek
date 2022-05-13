import React, { useState, useEffect } from 'react'
import './Estilos/Crear_grupo_syle.css'
import ErrorMessage from './ErrorMessage';
import CategoryCreationForm from './CategoryCreationForm';
import { CategoryGetAll } from '../services/CategoryServices'
import { communityAddUser, CommunityGetComunityById, CommunityUpdate } from '../services/CommunityServices'
import { useForm } from 'react-hook-form';
import { communitySchema } from '../validations/CommunitySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update_grupo = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(communitySchema)
    });

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [userSesion, setUserSesion] = useState();
    const params = useParams();
    const navigate = useNavigate();

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

    async function getInitialInformation() {
        try {
            const responseCommunity = await CommunityGetComunityById(params?.id);
            if(responseCommunity) {
                setName(responseCommunity?.name);
                setDescription(responseCommunity?.description);
                setCategoryTitle(responseCommunity._category?.title);
                setCategoryId(responseCommunity._category?._id);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateCommunity = async (data) => {
        try {
            data._id = params.id;
            await CommunityUpdate(data);

            console.log("comunidad actualizada con exito");
            navigate('/atomek/Muro/' + params.id);
        }
        catch(err) {
            console.log(err);
        }
    }

    const handleDeleteCommunity = async (event) => {
        try {
            await CommunityUpdate({
                _id: params.id,
                active: false
            });

            console.log("comunidad eliminada con exito");
            navigate('/atomek/Muro/Mi-Muro');
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
        getInitialInformation();
    }, []);

    return (
        <div className='publicar'>
            <form id='communityForm' onSubmit={handleSubmit(handleUpdateCommunity)}>
                <input class="form-control form-control-lg" type="text" defaultValue={name}
                    placeholder="Nombre del grupo" aria-label=".form-control-lg example" {...register("name")} />
                {errors.name && <ErrorMessage message={errors.name.message} />}
                <input class="form-control" type="text" defaultValue={description}
                    placeholder="Descripcion del grupo" aria-label="default input example" {...register("description")} />
                {errors.description && <ErrorMessage message={errors.description.message} />}
                <select class="form-select" id="validationDefault04" {...register("_category")} >
                    <option disabled value="">Categoria...</option>
                    {categories.map((cat, index) => (
                        categoryId == cat._id ?
                            <option key={index} selected value={cat._id}>{cat.title}</option>
                        :
                            <option key={index} value={cat._id}>{cat.title}</option>
                    ))}
                </select>
                {errors._category && <ErrorMessage message={errors._category.message} />}
            </form>
            <div class="row g-3">
                <CategoryCreationForm onCreation={onCategoryCreation} />
                <div class="d-grid gap-2">
                    <button class="btn-img" type="submit" form='communityForm'>Actualizar informacion</button>
                    <button class="btn-danger" onClick={handleDeleteCommunity}>Eliminar grupo</button>
                </div>
            </div>
        </div>
    )
}

export default Update_grupo