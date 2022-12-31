import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";

const Cart = ({cart}) => {
  const {deleteFromCart, sendOrder, deleteAllFromCart} = useContext (UserContext);

  const handleDelete = async (cartId, productId) => {
    await deleteFromCart(cartId, productId); 
  };

  const handleSendOrder = async () => {    
    await sendOrder();
  };

  const handleEmptyCart = async () => {
    await deleteAllFromCart(cart._id);
    alert('Carrito eliminado');
  };


  return (
    <div className='"m-auto w-50 mt-2'>   
    {cart
    ?
      <>
      <div className='container'>
      <h3 className='bg-light'>CARRITO DE COMPRAS</h3>
        <div className='row'>
          <div className='col-12 text-center'>     
            <div className='col-2 m-2'>
              <h3>Producto</h3>
            </div>

            <div className='col-2 m-2'>
            <h3>Descripcion</h3>
            </div>

            <div className='col-2 m-2'>
            <h3>Precio</h3> 
            </div>

            <div className='col-2 m-2'>
            <h3>Cantidad</h3>
            </div>

            <div className='col-2 m-2'>
            <h3>Total</h3> 
            </div>

            <div className='col-2 m-2'>
            <h3>Eliminar</h3> 
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          {cart.products.map((product, i)  => {
            return (
              <div key={i} className='w-100 d-flex bg-light shadow-sm text-center'>
                <div className='col-3 m-2'>
                  <p><b>{product.name}</b></p>
                </div>

                <div className='col-3 m-2'>
                  <p><b>{product.description}</b></p>
                </div>

                <div className='col-3 m-2'>
                  <p><b>${product.price}</b></p>
                </div>

                <div className='col-3 m-2'>
                  <p><b>{product.quantity}</b></p>
                </div>

                <div className='col-3 m-2'>
                  <p><b>${product.price * product.quantity}</b></p>
                </div>
                <p onClick={() => handleDelete(cart._id, product._id)} className='btn btn-outline-danger'>Eliminar</p>
              </div>
            )
          })}
        </div>           
      </div>
        <button className='btn btn-dark m-5' onClick={handleEmptyCart}>Vaciar Carrito</button>
        <button className='w-100 btn btn-outline-dark' onClick={handleSendOrder}>Finalizar Compra</button>
      </>
      :
      <Link to ="/login">Inicie Sesion para comprar</Link>
    }
    </div>
  )
}

export default Cart;