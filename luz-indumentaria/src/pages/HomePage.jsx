import React from "react";
import Cart from "../components/layout/Cart";
// import { useReducer } from "react";
import ProductoItem from "../components/layout/ProductItem";
// import { shoppingInitialState, shoppingReducer } from "../reducers/ShoppingReducer";
// import { TYPES } from "../action/CarritoAcciones";
// import CartItem from "../components/layout/CartItem";


// function HomePage() {

//   const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
//   const { products, cart } = state;

//   // const addToCart = (id) => {
//   //   // console.log(id);
//   //   dispatch({ type: TYPES.ADD_TO_CART, payload: id });
//   // };

//   // const DeleteFromCart = (id, all = false) => {
//   //   // console.log(id, all);
//   //   if (all) {
//   //     dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
//   //   } else {
//   //     dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
//   //   }
//   // };

//   // const clearCart = () => {
//   //   dispatch({ type: TYPES.CLEAR_CART })
//   // };

//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div className="container" id="lista-productos">

//         <section className="food_section layout_padding-bottom">
//           <div className="container">
//             <div className="heading_container heading_center">
//               <h2>
//                 Nuestros Productos
//               </h2>
//             </div>

//             <ul className="filters_menu">
//               <li className="active" data-filter="*">Todo</li>
//               <li data-filter=".burger">Remeras</li>
//               <li data-filter=".pizza">Camperas</li>
//               <li data-filter=".pasta">Gorras</li>
//               <li data-filter=".fries">Accesorios</li>
//             </ul>

//             <div className="filters-content">

//               <div className="container">

//                 <div className="row-respons">


//                   {products.map((product) => (
//                     <ProductoItem key={product.id} data={product}/>
//                   ))}





//                 </div>
//               </div>

//               {
//                 cart.map((item, index) =>
//                   <CartItem key={index} data={item}/>)
//               }

//               {/* <button id="" type="button" className="btn btn-primary"
//                 style={{ backgroundColor: "rgb(71, 136, 241)" }}>
//                   Vaciar Carrito</button> */}

//             </div>

//             <div className="btn-box">
//               <a href="">
//                 Ver más
//               </a>
//             </div>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

// export default HomePage;


const HomePage = () => {
  return (
    <div className="container">
      <Cart/>
      <ProductoItem/>
    </div>
  )
}

export default HomePage
