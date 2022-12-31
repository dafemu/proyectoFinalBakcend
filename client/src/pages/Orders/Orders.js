import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import axios from 'axios';

const Orders = () => {
  const [userData, setUserData] = useState(null);
  const { user, cart} = useContext(UserContext);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    setUserData(user)    
    // eslint-disable-next-line
  }, [cart]);

  useEffect(() => {
    if(userData){
      axios({
        method: 'GET',
        withCredentials: true,
        url: `http://localhost:8080/orders`
      })
      .then(res => {
        const orders = res.data.filter(order => order.userId === user._id)
        setOrders(orders)
        console.log(orders);
      })
      .catch(err => console.log(err))
    }
  }, [userData]);

  return (
    <div className='container-fluid'>
      <div className='d-flex flex-column align-items-center justify-content-start'>
      {userData
        ?
        <div className='text-center'>
          <h2>ORDENES DE COMPRA</h2>                   
          <div className='m-3'>
            {orders === null || orders.length === 0
            ? <p>No hay compras</p>
            :
              orders.map(order => (
                <div className='border border-3 m-2' key={order._id}>
                  <h3>Order ID: {order._id}</h3>
                  <p>Direccion de Entrega: {order.direccion}</p>
                  <p>Estado: {order.state}</p>
                  <p className='m-2'>Productos:</p>
                  <ul>
                    {order.products.map(product => (
                      <li key={product._id} className='m-2'>
                        <p>{product.name}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio: ${product.price}</p>
                      </li>
                    ))} 
                  </ul>
                </div>
              ))}
          </div>
        </div>
        :
        <>
          <p>Por favor Inicie Sesion</p>
          <Link to ="/login"><button className='btn btn-dark'>Login</button></Link>
        </>
      }
      <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
    </div>
    </div>
  )
};

export default Orders;