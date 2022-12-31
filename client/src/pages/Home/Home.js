import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContainer from "../../components/Products/ProductsContainer";
import UserContext from "../../context/userContext";

const Home = () => {  
  const {user} = useContext (UserContext);

  return (
    <div className="container">
      {user
        ?
          <>
            <ProductsContainer/> 
            {user.username === 'pepe' && <Link to ="/admin"><button className="btn btn-outline-dark">Ir al panel de administrador</button></Link>}
          </>
        :
          <>
            <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column justify-content-space align-content-center text-center m-5">
                  <Link to ="/login"><button className='btn btn-outline-success m-2'>Iniciar Sesión</button></Link>
                  <Link to ="/register"><button className='btn btn-outline-success m-2'>Registrarse</button></Link>
              </div>
            </div>
            </div>
          </>
      }
    </div>    
  )
};

export default Home;