import React from "react";

function Header() {
    return (
        <div>

            <div class="bg-box">
                <img src="./img/LOGO-1.png" alt="" />
            </div>

            <section className="slider_section ocultar">
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h1>
                                                Remeras
                                            </h1>
                                            <div className="btn-box">
                                                <a href="#" class="btn1">
                                                    Ver Más
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                Accesorios
                                            </h1>
                                            <div className="btn-box">
                                                <a href="" class="btn1">
                                                    Ver Más
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                Camperas
                                            </h1>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    Ver Más
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>

            </section> </div>
    );
}

export default Header;