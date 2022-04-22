import React, { useState, useEffect } from 'react'
import './Estilos/Slider_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";

const ListStreaks = () => {

    const [communities, setCommunities] = useState([]);
    const params = useParams();

    async function getInitialInformation() {
        try {
            const userJSON = localStorage.getItem("UserSession");
            const usuario = (JSON.parse(userJSON));
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInitialInformation();
    }, []);

    return (
        <div className="my-3 p-3 rounded border" id="RecuadroRachas">
            <h6 className="text-light border-bottom pb-2 mb-0 ">Rachas sugeridas de Usuarios</h6>
            <div className="d-flex text-muted pt-3">
                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB" /><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-light">Racha del mejor Abogado</strong>
                        <a className="text-light"><FontAwesomeIcon icon={faPlus} /></a>
                    </div>
                    <span className="d-block">@Lic PugBerto</span>
                </div>
            </div>

            <div className="d-flex text-muted pt-3">
                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB" /><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-light">Racha del mejor crochet cada día</strong>
                        <a className="text-light"><FontAwesomeIcon icon={faPlus} /></a>
                    </div>
                    <span className="d-block">Mi abuelita no me enseño a coser</span>
                </div>
            </div>

            <div className="d-flex text-muted pt-3">
                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6998AB" /><text x="50%" y="50%" fill="#6998AB" dy=".3em">32x32</text></svg>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                        <strong className="text-light">Racha de programar como un iiiinche toro sin usar pastillas</strong>
                        <a className="text-light"><FontAwesomeIcon icon={faPlus} /></a>
                    </div>
                    <span className="d-block">@Chobbi</span>
                </div>
            </div>
        </div>
    )
};

export default ListStreaks;
