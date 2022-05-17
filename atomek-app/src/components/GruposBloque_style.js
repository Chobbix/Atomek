import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { communityAddUser } from '../services/CommunityServices';
import './Estilos/GruposBloque.css'


const GruposBloque_style = (props) => {

    const Navigate = useNavigate();
    const params = useParams();

    const handleJoinCommunity = async (event, idCommunity) => {
        await communityAddUser({
            communityId: idCommunity,
            id: props?.propUserId
        });

        Navigate('/atomek/Muro/Mi-Muro');
    }

    return (
        <div>
            <div class="card" >
                <div class="cardbody">
                    <h3 className=''>{props.name}</h3>
                    <h5 className='text-muted'>Categoria: {props.category}</h5>
                    {
                        params.id == 'Descubrir' ?
                            <button className='btn_unirse' onClick={(e) => {handleJoinCommunity(e, props.propCommunityId)}}>Unirse al grupo</button>
                        :
                            <Link to={'/atomek/Muro/'+ props.propCommunityId}><button className='btn_unirse'>Ir al grupo</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default GruposBloque_style