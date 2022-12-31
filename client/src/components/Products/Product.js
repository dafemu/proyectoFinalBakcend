import { Link } from "react-router-dom";

const Product = ({product}) => {  
  return (
    <div className="card" style={ {width: '10rem'} }>
      <img className="card-img-top" src={product.thumbnail} alt={product.name}/>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
        <Link to={`/products/${product._id}`}><button className="btn btn-outline-dark">Detalle</button></Link>
    </div>
  )
}

export default Product