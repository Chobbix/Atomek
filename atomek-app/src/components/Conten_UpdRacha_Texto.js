import React, { Component, useEffect, useState } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/CrearRacha_style.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { ResponseCreate } from '../services/ResponseServices'
import { SubscriptionIncreaseCounter } from '../services/SubscriptionServices'


const UpdateRacha = (props) => {
  const [text, setText] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleCreateResponse = async (event) => {
    try {
      await ResponseCreate({
        text: text,
        note: note,
        _subscription: props.propSubscription._id
      });

      await SubscriptionIncreaseCounter({
        _id: props.propSubscription._id
      });

      navigate('/atomek/Perfil/');
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
                <div className="row g-3">
                  <div className="col-12">
                    <label for="text" className="form-label">Evidencia</label>
                    <textarea type="text" value={text}
                      onChange={({ target }) => setText(target.value)}
                      className="form-control" id="titulo" placeholder="Era hace una vez..."></textarea>
                  </div>
                  <div className="col-md-5">
                    <label for="country" className="form-label">Notas</label>
                    <input type="text" value={note}
                      onChange={({ target }) => setNote(target.value)}
                      className="form-control" id="titulo" placeholder="Hoy tuve un avance porque..."></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <button className=" boton_final w-100 btn-lg"
          onClick={handleCreateResponse} type="submit">ACTUALIZAR RACHA</button>
      </main>
    </>
  )
}

export default UpdateRacha