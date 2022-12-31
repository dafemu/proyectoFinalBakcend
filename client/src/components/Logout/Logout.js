import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';

const Logout = () => {

  const {logout} = useContext (UserContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    alert('Usuario ha cerrado sesion');
    navigate('/login');
  }

  return (
    <button className='btn btn-outline-warning' onClick={handleLogout}>Logout</button>
  )
}

export default Logout;