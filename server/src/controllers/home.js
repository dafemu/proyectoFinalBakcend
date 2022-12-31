import {getUser} from '../services/usuarios.js';
import config from '../config/config.js';
import { sendInfoLog } from '../logs/logger.js';

const getHome = async (req, res) => {  
  const userInfo = await getUser(req.user._id);
  
  const userData = {
    username : userInfo.username,
    email : userInfo.email,
    telefono : userInfo.telefono,
    direccion : userInfo.direccion,
    edad : userInfo.edad,
    _id : userInfo._id,
    image : userInfo.image
  };
  
  sendInfoLog(req);
  res.status(200).send(userData);
};

const getConfig = async (req, res) => {
  const configuration = config
  sendInfoLog(req);
  res.status(200).send(configuration);
};

export { getHome, getConfig };