import io from "socket.io-client";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

  const Chat = () => {
    const socket = io('http://localhost:8080', {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [message , setMessage] = useState({
    email: '',
    fecha: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    socket.on('messages', (data) => {
      setMessages(data);
    })     
    setLoading(false);
  }, []);

  const addMessage = (e) => {
    e.preventDefault();
    console.log(message);
    const mensaje = {
      email: message.email,
      fecha: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      mensaje: message.mensaje
    }
    socket.emit('new-message', mensaje);
    document.getElementById("mail").value = "";
    document.getElementById("mensaje").value = "";
  };

  return (
    <div className='container m-auto w-50 mt-2'>
      <h2>CENTRO DE MENSAJES</h2>        
      {loading ? <h3>Cargando mensajes...</h3> :
      <>
      <div id="mensajes" className='container-fluid'>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.email}</p>
            <p>[{message.fecha}]:</p>
            <p>{message.mensaje}</p>
          </div>
        ))}
      </div>
      <form onSubmit={addMessage} className="d-flex flex-column justify-content-center text-center">
        <input className="form-control m-2" type="text" id="mail" name='email' placeholder="Tu email" required onChange={handleChange}/>
        <input className="form-control m-2" type="text" id="mensaje" name='mensaje' placeholder="Ingresa un mensaje" onChange={handleChange}/>
        { 
          message.email && message.mensaje.length
            ?<input type="submit" value="Enviar" className="btn btn-primary"/>             
            :<input disabled type="submit" value="Enviar" className="btn btn-primary"/>      
        }
        <div id="mensajes"></div>
      </form> 
      </>
      }
      <Link to="/"><button className="btn btn-info m-5">VOLVER A HOME</button></Link>
    </div>
  )
}

export default Chat;