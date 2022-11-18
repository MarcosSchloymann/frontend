import React from "react";
import { productsData } from "../Data/productsData";
// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";

// function ProductoItem({ data, addToCart }) {
//     let { id, name, price } = data
//     // const { products, cart } = state;
//     // const {addItemToCart} = useContext(CartContext)
//     return (
//         <div className="box">
//             <div>
//                 <div className="img-box">
//                     <img src="./img/LOGO-1.png" alt="" />
//                 </div>
//                 <div className="detail-box">
//                     <h5>
//                         {name}
//                     </h5>
//                     <div className="options">
//                         <h6>
//                             $ <span>{price}</span>
//                         </h6>
//                         <button className="agregar-carrito" id={id}>
//                             <img src="./img/carro-de-la-compra.png.crdownload" width={25} alt="" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductoItem;


const ProductItem = () => {
  return (
    <div  className="row-respons filters-content container food_section ">
      {productsData.map((product, i) => (
        <div key={i}>
          <div className="box">
            <div>
              <div className="img-box">
                <img src={product.img} alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  {product.name}
                </h5>
                <div className="options">
                  <h6>
                    $ <span>{product.price}</span>
                  </h6>
                  <button className="agregar-carrito" onClick={()=>console.log(product)}>
                    <img src="./img/carro-de-la-compra.png.crdownload" width={25} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem