import React, { Component, useEffect, useState } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/CrearRacha_style.css'
import ErrorMessage from './ErrorMessage';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { ResponseCreate } from '../services/ResponseServices'
import { SubscriptionIncreaseCounter } from '../services/SubscriptionServices'

import { useForm } from 'react-hook-form';
import { responseSchema } from '../validations/ResponseSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const UpdateRacha = (props) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
      resolver: yupResolver(responseSchema),
      defaultValues: {
        type: props.propSubscription?._streak.type
      }
  });

  useEffect(() => {
    reset({type: props.propSubscription?._streak.type});
  }, [props.propSubscription?._streak.type]);

  const navigate = useNavigate();

  const handleCreateResponse = async (data) => {
    try {
      await ResponseCreate({
        text: data.text,
        note: data.note,
        _subscription: props.propSubscription._id
      });

      await SubscriptionIncreaseCounter({
        _id: props.propSubscription._id
      });

      navigate('/atomek/Streaks/Community/Mi-Muro');
      console.log("response registrado con exito");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <main>
        <div className="py-5 text-center">
          <h2>¡MUESTRANOS TU AVANCE!</h2>
        </div>
        <div className='contenido'>
          <div className="row g-5">
            <div className="col-md-7 col-lg-8">
              <div className="contenido_text">
                <h4 className="mb-3">Racha {props.propSubscription?._streak?.title} - DIA: {props.propSubscription?.counter}</h4>
                <form className="row g-3" id='responseForm' onSubmit={handleSubmit(handleCreateResponse, (errorObj) => console.log(errorObj))} >
                  <div className="col-12">
                    <input type='hidden' {...register("type")} />
                    <label for="text" className="form-label">Evidencia</label>
                    <textarea type="text"
                      className="form-control" id="titulo" placeholder="Era hace una vez..." {...register("text")} ></textarea>
                    {errors.text && <ErrorMessage message={errors.text.message} />}
                  </div>
                  <div className="col-md-5">
                    <label for="country" className="form-label">Notas</label>
                    <input type="text"
                      className="form-control" id="titulo" placeholder="Hoy tuve un avance porque..." {...register("note")} />
                    {errors.note && <ErrorMessage message={errors.note.message} />}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <button className=" boton_final w-100 btn-lg" type="submit" form='responseForm' >ACTUALIZAR RACHA</button>
      </main>
    </>
  )
}

export default UpdateRacha