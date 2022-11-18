import React from "react";

function NosotrosPage() {
    return (
        <div>
            <section className="about_section layout_padding">
                <div className="container  ">

                    <div className="row">
                        {/* <div class="col-md-6 ">
          <div class="img-box">
            <img src="images/enfoque2.jpg" alt=""/>
          </div>
        </div> */}
                        <div className="col-md-12">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        Quienes Somos
                                    </h2>
                                    <br/>
                                </div>
                                <p>
                                   Somos una tienda on-line, emprendimiento que estampa diseños de autoria propia en prendas de calidad. <br/>
                                   Con el objetivo de impartir con cada una de ellas, luz y verdad, a cada persona. <br/><br/>
                                   <h2>No es una prenda más, es vestimenta con propósito.</h2>
                                   <br/>
                                   <br/>
                                   <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">Gracias por visitarnos</div>
                                   </div>
                                   <div className="row">
                                    <div className="col-md-6"><img src="./img/LOGO-1.png" alt="" height={100}/></div>
                                    <div className="col-md-6"></div>
                                   </div>
                                   
                                   
                                   
                                </p>
                                {/* <a href="">
                                    Ver Más
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NosotrosPage;