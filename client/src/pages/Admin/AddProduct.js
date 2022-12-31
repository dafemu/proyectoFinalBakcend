import { useState } from "react";
import axios from "axios";

const AddProduct = ({reloadProducts}) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    code: "",
    thumbnail: "",
    price: "",
    stock: ""
  })

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    axios({
      method: 'POST',
      withCredentials: true,
      url: 'http://localhost:8080/products',
      data: product
    })
    .then(res => {
      console.log(res)
      alert('Producto agregado');

      document.getElementById('name').value = "";
      document.getElementById('description').value = "";
      document.getElementById('category').value = "";
      document.getElementById('code').value = "";
      document.getElementById('thumbnail').value = "";
      document.getElementById('precio').value = "";
      document.getElementById('stock').value = "";  

      reloadProducts();
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="m-auto w-50 mt-2" >				
      <form onSubmit={handleSubmit}>
        <h1>Agregar Producto</h1>                    
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input type="text" className="form-control" name="name" id="name" placeholder="Nombre de Producto" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="precio">Precio</label>
          <input type="number" className="form-control" name="price" id="precio" placeholder="Precio del Producto" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="precio">Codigo</label>
          <input type="text" className="form-control" name="code" id="code" placeholder="Codigo del Producto" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="precio">Descripcion</label>
          <input type="text" className="form-control" name="description" id="description" placeholder="Descripcion del Producto" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="precio">Categoria</label>
          <input type="text" className="form-control" name="category" id="category" placeholder="Categoria del Producto" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="precio">Stock</label>
          <input type="number" className="form-control" name="stock" id="stock" placeholder="Stock" required onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="thumbnail">Thumbnail</label>
          <input type="thumbnail" className="form-control" name="thumbnail" id="thumbnail" placeholder="URL de la Imagen" required onChange={handleChange}/>
        </div>

        {product.name && product.price && product.stock && product.category && product.code && product.description && product.thumbnail
        ? <button type="submit" className="btn btn-outline-success">Agregar</button> 
        : <button type="submit" className="btn btn-outline-success" disabled>Agregar</button>}          
      </form>
    </div>

  )
};

export default AddProduct;