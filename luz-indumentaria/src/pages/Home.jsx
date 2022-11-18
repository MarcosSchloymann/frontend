import React from "react";
import { useReducer } from "react";
import ProductoItem from "../components/layout/ProductItem";
import { shoppingInitialState, shoppingReducer } from "../reducers/ShoppingReducer";
import { TYPES } from "../action/CarritoAcciones";
import CartItem from "../components/layout/CartItem";


function Home() {


  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container" id="lista-productos">

        <section className="food_section layout_padding-bottom">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Nuestros Productos
              </h2>
            </div>

            <ul className="filters_menu">
              <li className="active" data-filter="*">Todo</li>
              <li data-filter=".burger">Remeras</li>
              <li data-filter=".pizza">Camperas</li>
              <li data-filter=".pasta">Gorras</li>
              <li data-filter=".fries">Accesorios</li>
            </ul>

            <div className="filters-content">

              <div className="container">

                <div className="row-respons">


                  {products.map((product) => (
                    <ProductoItem key={product.id} data={product}/>
                  ))}





                </div>
              </div>

              {
                cart.map((item, index) =>
                  <CartItem key={index} data={item}/>)
              }

              {/* <button id="" type="button" className="btn btn-primary"
                style={{ backgroundColor: "rgb(71, 136, 241)" }}>
                  Vaciar Carrito</button> */}

            </div>

            <div className="btn-box">
              <a href="">
                Ver más
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;