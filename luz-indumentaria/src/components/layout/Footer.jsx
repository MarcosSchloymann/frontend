import React from "react";

function Footer() {
    return (
        <div>
            <footer className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Contactanos
                                </h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Ubicación: Comodoro Rivadavia <p>B° Isidro Labrador</p>
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Teléfono: 2975941115
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            luz.indumentaria@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <div className="footer_detail">
                                <a href="" class="footer-logo">
                                    Luz Indumentaria
                                </a>
                                <p>
                                    Remeras de algodón de calidad.<br/>
                                    Talles reales desde el S al XXXL.
                                </p>
                                <div className="footer_social">
                                    {/* <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                   
                                    <a href="">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a> */}
                                    <a href="https://www.instagram.com/_luz_indumentaria/" target="_blank">
                                        <i className="fa fa-instagram" aria-hidden="true"><img src="./img/icons8-instagram-old-50.png" alt="" width={30} /></i>
                                    </a>
                            
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <h4>
                                Atención
                            </h4>
                            <p>
                                Todos los días
                            </p>
                            <p>
                                10.00 Am -7.00 Pm
                            </p>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> Todos Los Derechos Reservados
                            <a href="https://www.instagram.com/cisch_music/" target="_blank"> Cisch</a><br/>
                        </p>
                     </div>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;