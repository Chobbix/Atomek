import React from 'react'
import './Estilos/Response_style.css'
import pp from '../Imagenes/picture_perfil.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faStar } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';

const Response = (props) => {
    Moment.locale('es');

    return (
        <>
            <div className="tarjetamuro ">
                <div className="cardheader">
                    <div>
                        <img src={props?.propUserImage ?? `https://avatars.dicebear.com/api/bottts/${props.propIdUser?._id}.svg`} alt="img-avatar" className='perfil'></img>
                    </div>
                    <div>
                        <h4 className='grupo'>Racha: {props?.propSubscriptionName}</h4>
                        <div className='informacion'>
                            <h5 className='usuario' >{props?.propUsername}</h5>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div>
                        {
                            props.propSubscriptionType == '2' ?
                                <p className="cardtext">{props.propResponse?.text}</p>
                            :
                                <div className='image-container'>
                                    <img src={props.propResponse?.image} className="image" alt="Responsive image"></img>
                                </div>
                        }
                    </div>
                </div>
                <div className="card-footer">
                    <p className="card-note">{props.propResponse?.note}</p>
                    <div className='informacion'>
                        <h5 className='usuario' >{Moment(props.propResponse?.date_create).format('DD/MM/yyyy')}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Response