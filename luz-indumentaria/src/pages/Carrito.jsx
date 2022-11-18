// import React from "react";
// import { useReducer } from "react";
// import CartItem from "../components/layout/CartItem";
// import { TYPES } from "../action/CarritoAcciones";
// import { shoppingInitialState, shoppingReducer } from "../reducers/ShoppingReducer";

// function CarritoDeCompras() {
//     const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
//     const { products, cart } = state;

//     const DeleteFromCart = () => { };

//     const clearCart = () => { };

//     return (
//         <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//             aria-hidden="true">
//             <div id="carrito" className="modal-dialog" style={{ top: 100 }}>

//                 <div className="modal-content text-center" style={{ backgroundColor: "rgb(142, 142, 142)" }}>
//                     <div className="modal-header">
//                         <h2 className="modal-title" id="exampleModalLabel" style={{ color: "white" }}>Compras</h2>

//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>

//                     <table id="lista-carrito" className="table" style={{ color: "white" }}>
//                         <thead>
//                             <tr>
//                                 <th>Imagen</th>
//                                 <th>Nombre</th>
//                                 <th>Precio</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                 cart.map((item, index) =>
//                   <CartItem key={index} data={item} DeleteFromCart={DeleteFromCart} />)
//               }
//                         </tbody>
//                     </table>

//                     <div className="modal-footer">

//                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
//                             style={{ backgroundColor: "rgb(241, 98, 98)" }}>Cerrar</button>
//                         <button id="vaciar-carrito" type="button" className="btn btn-primary"
//                             style={{ backgroundColor: "rgb(71, 136, 241)" }} onClick={() => clearCart}>Vaciar Carrito</button>

//                     </div>
//                     <button id="procesar-pedido" type="button" className="btn btn-primary"
//                         style={{ backgroundColor: "rgb(166, 200, 169)" }}>Procesar Compra</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CarritoDeCompras;