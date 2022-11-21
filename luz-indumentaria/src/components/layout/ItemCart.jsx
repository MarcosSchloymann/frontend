import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemCart = ({ item }) => {
    const { deleteItemToCart, addItemToCart } = useContext(CartContext);

    const { id } = item;


    return (
        <div className='cart-item row'>
            <div className='col-3'>
            <img src={item.img} alt={item.name} width={100} />
            </div>
            <div className='col-3'>
                <h3>
                {item.name} <br /> 
            </h3>
            {item.amount}
            </div>
            
            <div className='data-container col-6'>

                <div className='dala-left'>

                    <div className='buttons'>
                        <button onClick={() => addItemToCart(item)}>
                            Agregar
                        </button>
                        <button onClick={() => deleteItemToCart(item)}>
                            Quitar
                        </button>
                    </div>
                </div>
                <div>
                    <div className='data-right col'>
                        <p>Total = ${item.amount * item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart