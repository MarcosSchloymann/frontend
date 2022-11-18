import React from "react";

function CartItem({data, DeleteFromCart}) {
let {id, name, price, quantity} = data

    return (
        <div>
            <th>{name}</th>
            <th>${price}X{quantity}=${price*quantity}</th>
            <th><button onClick={()=>DeleteFromCart(id)}>Eliminar Uno</button></th>
            <th><button onClick={()=>DeleteFromCart(id, true)}>Eliminar Todos</button></th>
        </div>
    );
}

export default CartItem;