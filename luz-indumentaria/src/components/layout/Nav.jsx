import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegador() {
    return (
        <header className="header_section" style={{ backgroundColor: "rgb(121, 121, 121)"}}>
            <Navbar
                className="header_section navbar custom_nav-container" expand="lg" style={{ backgroundColor: "rgb(121, 121, 121)" }}>
                <Container >
                    <Navbar.Brand href="#home">
                        <span>
                            Luz Indumentaria
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav  mx-auto ">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Inicio<span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="productos.html">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="nosotros.html">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contacto.html">Contacto</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="compra.html">

                                    <a className="cart_link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <img src="./img/carro-de-la-compra.png.crdownload" width={25} alt="" />
                                    </a>

                                    <CarritoDeCompras/>

                                    {/* <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div id="carrito" className="modal-dialog" style={{top:100}}>

                                            <div className="modal-content text-center" style={{backgroundColor:"rgb(67, 67, 67)"    }}>
                                                <div className="modal-header">
                                                    <h2 className="modal-title" id="exampleModalLabel" style={{color:"white"}}>Compras</h2>

                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <table id="lista-carrito" className="table" style={{color:"white"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>Imagen</th>
                                                            <th>Nombre</th>
                                                            <th>Precio</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>

                                                <div className="modal-footer">

                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                                        style={{backgroundColor:"rgb(241, 98, 98)"}}>Cerrar</button>
                                                    <button id="vaciar-carrito" type="button" className="btn btn-primary"
                                                        style={{backgroundColor:"rgb(71, 136, 241)"}}>Vaciar Carrito</button>

                                                </div>
                                                <button id="procesar-pedido" type="button" className="btn btn-primary"
                                                    style={{backgroundColor:"rgb(96, 95, 95)"}}>Procesar Compra</button>
                                            </div>
                                        </div>
                                    </div> */}

                                {/* </a> */}
                            {/* </li> */} 
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navegador;