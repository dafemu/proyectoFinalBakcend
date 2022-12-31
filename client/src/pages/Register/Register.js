import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    edad: '',
    telefono: '',
    direccion: '',
    email: '',
    emailb: '',
    password: ''  
  });

  const [error, setError] = useState('');

  const [file, setFile] = useState();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (user.password !== user.passwordb) {
      setError('Los contraseñas no son iguales');
      return;     
    }    
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('edad', user.edad);
    formData.append('telefono', user.telefono);
    formData.append('direccion', user.direccion);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('myFile', file);

    axios({
      method: 'POST',
      url: 'http://localhost:8080/auth/register',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      alert('Usuario registrado con exito');
      navigate('/login');
    })
    .catch(err => 
      {
        alert('Ya existe usuario con ese email');
        console.log(err);
      })
  }

  return (
    <div className="container">
      <div className="m-auto w-50 mt-2">				
				<form onSubmit={handleRegister}>
					<h1>REGISTRO DE  USUARIO</h1>                
					<div className="mb-3">
						<label  className="form-label" htmlFor="name">Nombre</label>
						<input type="text" className="form-control" name="username" id="username" placeholder="Nombre de Usuario" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="edad">Edad</label>
						<input type="number" className="form-control" name="edad" id="edad" placeholder="Edad del Usuario" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="telefono">Telefono</label>
						<input type="number" className="form-control" name="telefono" id="telefono" placeholder="+Indicativo - telefono" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="direccion">Direccion</label>
						<input type="text" className="form-control" name="direccion" id="direccion" placeholder="Direccion del Usuario" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="email">Email</label>
						<input type="email" className="form-control" name="email" id="email" placeholder="Email" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="password">Contraseña</label>
						<input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" required onChange={handleChange}/>
					</div>

					<div className="mb-3">
						<label  className="form-label" htmlFor="passwordb">Digita de nuevo la contraseña</label>
						<input type="password" className="form-control" name="passwordb" id="passwordb" placeholder="**********" required onChange={handleChange}/>
					</div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

					<div className="mb-3">
						<label  className="form-label" htmlFor="foto">Foto perfil</label>
						<input type="file" className="form-control" name="myFile" id="foto" required onChange={handleFile}/>
					</div>

          {user.username && user.telefono && user.email && user.password && user.passwordb
            ?<button type="submit" className="btn btn-success">Registrar</button>             
            :<button disabled type="submit" className="btn btn-success">Registrar</button>             
          }
				</form>
			</div>
      <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
    </div>
  )
}

export default Register;