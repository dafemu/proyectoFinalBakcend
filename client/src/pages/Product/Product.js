import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/userContext';
import ItemCount from '../../components/ItemCount/ItemCount';
import Error from '../../components/Error/Error';

const Product = () => {
  const {cart, addToCart} = useContext (UserContext); 
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { pathname } = useLocation();

  const URL = `http://localhost:8080/products/${pathname.split('/')[2]}`;

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: URL
    })
    .then(res => {      
      setProducto(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log('No existe el producto');
      setError(true);
      setLoading(false);
    })
  }, [URL]);
  
  const onAdd = async (quantity) => {        
    await addToCart(cart._id, producto._id, quantity)   
  };

  return (
    <div className="container m-2">
      {loading        
        ?
          <h1>Cargando...</h1>
        :
          error          
          ?
            <Error error = {'No existe el producto'}/>            
          :
            <div>
              <img className="card-img-top" src={producto.thumbnail} alt={producto.name}/>
              <h1>{producto.name}</h1>
              <h1>Categoría: {producto.category}</h1>
              <p>Descripción: {producto.description}</p>
              <p>Precio: ${producto.price}</p>
              <ItemCount stock={producto.stock} onAdd={onAdd}/>            
            </div>
      }
    <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
    </div>
    
  )
}

export default Product;