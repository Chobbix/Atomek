import React, { useState, useEffect } from "react";
import logo from "../Imagenes/Atomeak LOGO2.0.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCamera, faWrench } from "@fortawesome/free-solid-svg-icons";
import "./Estilos/CrearRacha_style.css";
import ErrorMessage from "./ErrorMessage";
import TagCreationForm from "./TagCreationForm";
import { Link } from "react-router-dom";
import { communityGetComunitiesByUser } from "../services/CommunityServices";
import { StreakCreate, StreakGetById, StreakUpdate } from '../services/StreakServices'
import { useNavigate, useParams } from 'react-router-dom'
import { SubscriptionCreate } from '../services/SubscriptionServices'
import { TagCreate, TagGetTagsByUser } from "../services/TagServices";
import { useForm } from "react-hook-form";
import { streakSchema } from "../validations/StreakSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ContRacha = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(streakSchema),
  });

  const params = useParams();
  const navigate = useNavigate();

  const [userSesion, setUserSesion] = useState();
  const [communities, setCommunities] = useState([]);
  const [tags, setTags] = useState([]);

  async function getInitialInformation() {
    try {
      const userJSON = localStorage.getItem("UserSession");
      const usuario = JSON.parse(userJSON);
      console.log(usuario);
      const data = await communityGetComunitiesByUser(usuario);
      const tagsResponse = await TagGetTagsByUser(usuario._id);

      setTags(tagsResponse);
      setUserSesion(usuario);
      setCommunities(data);

      if(params.idStreak) {
        const responseStreak = await StreakGetById(params.idStreak);
        // setName(responseStreak.title); ///////////////////////////////////
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleCreateTag = async () => {
    const tagsResponse = await TagGetTagsByUser(userSesion._id);
    setTags(tagsResponse);
  };

  const handleCreateStreak = async (data) => {
    console.log(data);
    return;

    var responseStreak;
    try {
      if (data._community != 1) {
        responseStreak = await StreakCreate(data);
      } else {
        responseStreak = await StreakCreate({
          title: data.title,
          type: data.type,
          _user: userSesion._id,
        });
      }

      await SubscriptionCreate({
        _id: responseStreak._id,
        _user: userSesion._id,
        _tags: data._tags,
      });

      navigate("/atomek/URacha/" + responseStreak._id);
      console.log("streak registrado con exito");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateStreak = async (event) => {
    // try {

    //   await StreakUpdate({
    //     _id: params?.idStreak,
    //     title: name
    //   });

    //   navigate('/atomek/Streaks/Community/Mi-Muro');
    //   console.log("streak registrado con exito");
    // }
    // catch (err) {
    //   console.log(err);
    // }
  }

  useEffect(() => {
    getInitialInformation();
  }, []);

  return (
    <main>
      <div className="py-5 text-center">
        {!params?.idStreak ? <h2>Creación de Racha</h2> : <h2>Modificación de Racha</h2>}
      </div>
      <div className="contenido">
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <div className="contenido_text">
              <h4 className="mb-3">Datos de la racha</h4>
              <div className="row g-3">
                <form
                  onSubmit={handleSubmit(handleCreateStreak)}
                  id="streakForm"
                  className="row g-3"
                >
                  <div className="col-12">
                    <label for="text" className="form-label">
                      Titulo de Racha
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="titulo"
                      placeholder="Racha de ..."
                      {...register("title")}
                    ></input>
                    {errors.title && (
                      <ErrorMessage message={errors.title.message} />
                    )}
                  </div>
                  {
                    !params.idStreak &&
                    <>
                      <div className="col-md-5">
                        <label for="country" className="form-label">
                          Racha para...
                        </label>
                        <select
                          className="form-select"
                          id="country"
                          {...register("_community")}
                        >
                          <option selected disabled value="">
                            Elige...
                          </option>
                          <option value="1">Mi perfil</option>
                          {communities.map((com, index) => (
                            <option key={index} value={com._id}>
                              {com.name}
                            </option>
                          ))}
                        </select>
                        {errors._community && (
                          <ErrorMessage message={errors._community.message} />
                        )}
                      </div>
                      <div className="col-md-5">
                        <label for="country" className="form-label">
                          Tipo de racha
                        </label>
                        <select
                          className="form-select"
                          id="country"
                          {...register("type")}
                        >
                          <option selected disabled value="">
                            Elige...
                          </option>
                          <option value="1">Foto</option>
                          <option value="2">Texto</option>
                        </select>
                        {errors.type && (
                          <ErrorMessage message={errors.type.message} />
                        )}
                      </div>
                      <div className="col-md-5">
                        <label for="country" className="form-label">
                          Agregar etiquetas
                        </label>
                        <select
                          className="form-select"
                          id="country"
                          multiple="multiple"
                          {...register("_tags")}
                        >
                          {tags?.map((tag, index) => (
                            <option key={index} value={tag._id}>
                              {tag.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  }
                </form>
                {!params.idStreak && userSesion?._id && <TagCreationForm userId={userSesion._id} onCreation={handleCreateTag} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <button
        className=" boton_final w-100 btn-lg"
        type="submit"
        form="streakForm"
      >
        {params.idStreak ? "CREAR RACHA" : "ACTUALIZAR RACHA"}
      </button>
    </main>
  );
};

export default ContRacha;
