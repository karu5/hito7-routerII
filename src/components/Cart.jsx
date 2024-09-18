import React from 'react';
import { formatearNumero } from './helpers/format.jsx';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';
import { useApi } from './context/ApiContext.jsx';
import { useUser } from './context/UserContext.jsx';


const Cart = () => {
  const { cartItems, agregarAlCarro, eliminarDelCarro, total } = useCart();
  const { capPrimeraLetra } = useApi()
  const { user } = useUser();


  return (
    
  <div className="cart">

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title">Mamma Mia</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      {cartItems.length === 0 ? (
        <p>Tu carro está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} >
            <img src={item.img} alt={item.name} className="card-img-top" />
              <div>
                <h4>{capPrimeraLetra(item.name)}</h4>
                <div className="cart-item-controls">
                  <button onClick={() => eliminarDelCarro(item)} className='restar'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => agregarAlCarro(item)} className='agregar'>+</button>
                </div>
                <p>Precio: ${formatearNumero(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${formatearNumero(total)}</h3>

          {user && (
             <Link to="/Pagar" className="btn add">
               Pagar
            </Link>
          )}

        </div>
      )}
    </div>
    </div>
  </div>
</div>
  );
};

export default Cart;