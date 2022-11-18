import React from "react";

function ContactoPage() {
    return (
        <div>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Contacto
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form_container">
                                <form action="">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Teléfono" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div>
                                        <textarea className="form-control" name="" id="" rows=""></textarea>
                                    </div>
                                    <div>
                                    </div>
                                    {/* <div>
                <input type="date" className="form-control"/>
              </div>  */}
                                    <div className="btn_box">
                                        <button>
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactoPage;