import axios from 'axios';
import { Link } from "react-router-dom";

const AdminProduct = ({product, reloadProducts}) => {    
  
  const handleDeleteProduct = () => {
    axios({
      method: 'DELETE',
      withCredentials: true,
      url: `http://localhost:8080/products/${product._id}`
    })  
    .then(res =>  
      {
      if (res.status === 200) {
        alert('Producto eliminado');
        reloadProducts();
      }
    })
    .catch(err => console.log(err));
  }
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <div>
              <img style={{width: '100%'}} src={product.thumbnail} alt={product.name} />
          </div>
          <div className='col-6'>
            <h3>{product.name}</h3>
            <p>ID: {product._id}</p>
            <p>Precio: ${product.price}</p>    
            <p>Stock: {product.stock}</p>    
            <p>Categoría: {product.category}</p>
            <p>Descripcio: {product.description}</p>
          </div>
          <div className="d-flex flex-row justify-content-between">    
            <Link to={`/products/edit/${product._id}`}><button className='btn btn-outline-success'> Editar</button></Link>
            <button onClick={handleDeleteProduct}className='btn btn-outline-danger'>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AdminProduct;