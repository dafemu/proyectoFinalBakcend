import { useContext } from 'react';
import UserContext from '../../context/userContext';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cart } = useContext(UserContext);

  return (
    <div className='container m-5'>
      <h3 className='bg-light'>CARRITO DE COMPRAS</h3>
      {cart && cart.products.length > 0
        ?
        <Cart cart={cart}/>
        :
        <Link to={'/'}><button className='btn btn-dark m-5'>Ir a comprar</button></Link> 
      }  
      <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>   
    </div>
  )
};

export default CartContainer;