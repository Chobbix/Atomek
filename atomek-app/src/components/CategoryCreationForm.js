import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ErrorMessage from './ErrorMessage';
import { CategoryCreate, CategoryGetAll } from '../services/CategoryServices';
import { useForm } from 'react-hook-form';
import { categorySchema } from '../validations/CategorySchema';
import { yupResolver } from '@hookform/resolvers/yup';

const CategoryCreationForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(categorySchema)
    });

    const { onCreation } = props;

    const handleCreateCategory = async (data) => {
        try {
            await CategoryCreate(data);
            
            if (onCreation) {
                onCreation(data);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <form className='row g-3' onSubmit={handleSubmit(handleCreateCategory)}>
            <div class="col-auto">
                <input type="text" class="form-control" id="inputPassword2" placeholder="Crear categoria" {...register("title")} />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn-plus">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            {errors.title && <ErrorMessage message={errors.title.message} />}
        </form>
    );
};

export default CategoryCreationForm;