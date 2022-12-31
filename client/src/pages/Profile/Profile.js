import { useContext } from 'react';
import UserContext from '../../context/userContext';
import Logout from '../../components/Logout/Logout';
import { Link } from 'react-router-dom';

const Profile = () => {
  const {user} = useContext (UserContext);

  return (       
    <div className='container'>
      <div id="infoUserContainer" className='d-flex flex-column justify-content-center align-items-center p-2'>
        {user
          ?
          <>
          <img className="card-img-top" src={`http://localhost:8080/profileImages/${user.image}`} alt="User"/>
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
          <p>Telefono: {user.telefono}</p>
          <p>Direccion: {user.direccion}</p>
          <p>Edad: {user.edad}</p>
          <p>ID: {user._id}</p>	
          <Link to ="/orders"><button>Ver Ordenes</button>  </Link>        
          <Logout/> 
          </>
          :
          <Link to ="/login">Por Favor Inicie Sesion</Link>
        }
        <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
			</div>
    </div>
  )
}

export default Profile