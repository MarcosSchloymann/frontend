import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Products({ data, addToCart }) {
    const {addItemToCart} = useContext(CartContext)
    return (
        <div className="box">
            <div>
                <div className="img-box">
                    <img src="./img/LOGO-1.png" alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Remeras
                    </h5>
                    <div className="options">
                        <h6>
                            $ <span>100</span>
                        </h6>
                        <button className="agregar-carrito" id={id} onClick={()=>addItemToCart(products)}>
                            <img src="./img/carro-de-la-compra.png.crdownload" width={25} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
