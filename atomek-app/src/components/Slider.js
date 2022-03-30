import React from "react";
import './Estilos/Slider_style.css'

const Slider = () => {
    return (
        <div className="container_slider">
            <div className="Grupo">
                <button class="btn_muro " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <h5 className="btn_name">Tus grupos</h5></button>

                <div class="canvas " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  
                    <div class="offcanvas-body">
                        <div class="row">
                            <div class="columnas">
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class=" item active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                                    <a class="item" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                    <a class="item" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                    <a class="item" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="Muro">
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            holis
                        </div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            popis
                        </div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                           
                        </div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                            
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Slider;
