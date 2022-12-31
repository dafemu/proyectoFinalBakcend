import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const [product, setProduct] = useState()
  const { pathname } = useLocation();   
  const URL = `http://localhost:8080/products/${pathname.split('/')[3]}`;

  const navigate = useNavigate();

  const [newProducts, setNewProducts] = useState({
    _id: URL,
    name: '',
    description: '',
    category: '',
    price: '',
    code: '',
    stock: '',
    thumbnail: ''
  });

  const handleChange = (e) => {
    setNewProducts({
      ...newProducts,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: URL
    })
    .then(res => {
      setProduct(res.data)
    })
    .catch(err => console.log(err))
  }, [URL]);

  const handleEditProduct = (e) => {
    e.preventDefault()
    axios({
      method: 'PUT',
      withCredentials: true,
      url: URL,
      data: newProducts
    })
    .then(res => {
      if (res.status === 200) {
        alert('Producto editado');
        navigate('/admin');
      }
    })
    .catch(err => console.log(err));
  }
  
  return (
    <div className="container">
      {product &&
        <div className="row">
          <form className="col-12">
            <h1>EDITAR PRODUCTO</h1>                   
            <div className="mb-3">
              <label htmlFor="name">Id</label>						
              <input type="text" name="_id" id="id" value={product._id} readOnly/>						
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Nombre</label>
              <input type="text" className="form-control" name="name" id="name" placeholder={product.name} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="precio">Precio</label>
              <input type="number" className="form-control" name="price" id="precio" placeholder={product.price} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="precio">Codigo</label>
              <input type="text" className="form-control" name="code" id="code" placeholder={product.code} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="precio">Descripcion</label>
              <input type="text" className="form-control" name="description" id="description" placeholder={product.description} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="precio">Categoria</label>
              <input type="text" className="form-control" name="category" id="category" placeholder={product.category} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="precio">Stock</label>
              <input type="number" className="form-control" name="stock" id="stock" placeholder={product.stock} required onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="thumbnail">Thumbnail</label>
              <input type="thumbnail" className="form-control" name="thumbnail" id="thumbnail" placeholder={product.thumbnail} required onChange={handleChange}/>                        
            </div>
                         
            <div className="form-button">
              {newProducts.name && newProducts.price && newProducts.stock && newProducts.category && newProducts.code && newProducts.thumbnail !== '' && newProducts.description 
                ? <button type="submit" className="btn btn-outline-success" onClick={handleEditProduct}>Editor</button> 
                : <button type="submit" className="btn btn-outline-success" disabled>Editor</button>}              
            </div> 
          </form>
        </div>
      }
      <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
    </div>
  )
}

export default Edit;