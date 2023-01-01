import { create } from '../services/usuarios.js';
import { sendInfoLog } from '../logs/logger.js';
import { saveCart } from '../services/carritos.js';

import {sendMail} from '../middleware/nodemailer.js';

const postRegister = async (req, res) => {
  sendInfoLog(req);
  const file = req.file;
  const image = file.filename;
  
  const {username, edad, telefono, direccion, password, email } = req.body;

  try {
    const user = await create({username, edad, telefono, direccion, password, email, image});
    if (!user) {
      res.status(400).send({message: 'El usuario ya existe'});
    } else {
      let userId = user._id;
      sendMail(user);
      const cart = await saveCart(userId, username, email, direccion);      
      res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({message: 'Error al registrar el usuario'});
  }
}

export { postRegister };
  
  

