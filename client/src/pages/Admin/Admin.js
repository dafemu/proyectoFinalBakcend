import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContainer from '../../components/Products/ProductsContainer';
import UserContext from '../../context/userContext';

const Admin = () => {
  const {user} = useContext (UserContext);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          {user && user.username === 'pepe'
            ?
              <>
                <ProductsContainer/>    
                <div className="m-auto w-75 mt-4 p-4 border border-3 border-success rounded">
                  <Link to="/">VOLVER A HOME</Link>
                </div>   
              </>
            :
            <div class="alert alert-warning" role="alert">
              No tienes permisos para esta pagina
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Admin;