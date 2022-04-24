import React, { useState, useEffect } from 'react'
import logo from '../Imagenes/Atomeak LOGO2.0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCamera, faWrench } from '@fortawesome/free-solid-svg-icons'
import './Estilos/CrearRacha_style.css'
import { Link } from "react-router-dom";
import { communityGetComunitiesByUser } from '../services/CommunityServices'
import { StreakCreate } from '../services/StreakServices'
import { useNavigate } from 'react-router-dom'
import { SubscriptionCreate } from '../services/SubscriptionServices'
import { TagCreate, TagGetTagsByUser } from '../services/TagServices'

const ContRacha = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [owner, setOwner] = useState('');
  const [tagTitle, setTagTitle] = useState('');
  const [tag_id, setTag_id] = useState([]);
  const navigate = useNavigate();

  const [userSesion, setUserSesion] = useState();
  const [communities, setCommunities] = useState([]);
  const [tags, setTags] = useState([]);

  async function getInitialInformation() {
    try {
      const userJSON = localStorage.getItem("UserSession");
      const usuario = (JSON.parse(userJSON));
      console.log(usuario);
      const data = await communityGetComunitiesByUser(usuario);
      const tagsResponse = await TagGetTagsByUser(usuario._id);

      setTags(tagsResponse);
      setUserSesion(usuario);
      setCommunities(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleChangeTagInput = async (event) => {
    let value = Array.from(event.target.selectedOptions, option => option.value);
    setTag_id({values: value});
  }

  const handleCreateTag = async (event) => {
    console.log(tagTitle);
    try {
      await TagCreate({
        _user: userSesion._id,
        title: tagTitle
      })

      const tagsResponse = await TagGetTagsByUser(userSesion._id);
      setTags(tagsResponse); 
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleCreateStreak = async (event) => {
    var responseStreak;
    try {
      if (owner != 1) {
        responseStreak = await StreakCreate({
          title: name,
          type: type,
          _community: owner
        });
      }
      else {
        responseStreak = await StreakCreate({
          title: name,
          type: type,
          _user: userSesion._id
        });
      }

      await SubscriptionCreate({
        _id: responseStreak._id,
        _user: userSesion._id,
        _tags: tags
      });

      navigate('/atomek/URacha/' + responseStreak._id);
      console.log("streak registrado con exito");
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getInitialInformation();
  }, []);
  return (

    <main>

      <div className="py-5 text-center">
        <h2>Creación de Racha</h2>
      </div>
      <div className='contenido'>
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <div className="contenido_text">
              <h4 className="mb-3">Datos de la racha</h4>
              <div className="row g-3">
                <div className="col-12">
                  <label for="text" className="form-label">Titulo de Racha</label>
                  <input type="text" value={name}
                    onChange={({ target }) => setName(target.value)}
                    className="form-control" id="titulo" placeholder="Racha de ..."></input>
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">Racha</label>
                  <select className="form-select" onChange={({ target }) => setOwner(target.value)} id="country" required>
                    <option selected disabled value="">Elige...</option>
                    <option value="1">Mio</option>
                    {communities.map((com, index) => (
                      <option key={index} value={com._id}>{com.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-5">
                  <label for="country" className="form-label">Tipo de racha</label>
                  <select className="form-select" onChange={({ target }) => setType(target.value)} id="country" required>
                    <option selected disabled value="">Elige...</option>
                    <option value="1">Foto</option>
                    <option value="2">Texto</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="country" className="form-label">Etiqueta</label>
                  <input type="text"  value={tagTitle}
                    onChange={({ target }) => setTagTitle(target.value)}
                    className="form-control" id="inputPassword2" placeholder="Crear etiqueta" />

                </div>
                <div className="col-md-1">
                  <button type="submit" class="btn-plus " onClick={handleCreateTag}><FontAwesomeIcon icon={faPlus} /> </button>
                </div>
                <div className="col-md-5">
                  <label for="country" className="form-label">Selecciona las etiquetas</label>
                  <select className="form-select"
                    onChange={(e) => {handleChangeTagInput(e)}} id="country" multiple="multiple" required >
                    {tags?.map((tag, index) => (
                      <option key={index} value={tag._id}>{tag.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <button className=" boton_final w-100 btn-lg" type="submit"
        onClick={handleCreateStreak}>CREAR RACHA</button>
    </main>

  )
}

export default ContRacha