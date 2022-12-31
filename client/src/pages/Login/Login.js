import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";

const URL = 'http://localhost:8080/auth/login';

const Login = (props) => {
  const {login} = useContext (UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    password:""    
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    });
  };
 
  const handleSubmit =  (event) => {
    event.preventDefault()
    //post with axios and save the cookie
    axios({
      method: "POST",
      origin: "http://localhost:3000",
      data: user,
      withCredentials: true,
      url: URL           
    })
    .then(async res => {
      /* if error */
      if (res.status === 200) {                      
        login()         
        navigate('/')
      }    
    })  
    .catch(err => {
      alert('error de logueo');
      console.log('error de logueo', err);
    });
  };  

  return (
    <div className="m-auto w-50 mt-2">      
      <form>
        <h1>LOGIN USUARIO</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" type="text" name="email" placeholder="Email" onChange={handleInputChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">PASSWORD</label>
          <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
        </div>

        <button onClick={handleSubmit} className='btn btn-dark'>Login</button>        
      </form>
      <Link to="/register"><div className="btn btn-outline-success mt-2">Registrarse</div></Link>
    </div>
  )
}

export default Login;